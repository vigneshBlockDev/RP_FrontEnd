let Royal_Sundaram_Response;
let Bharati_Axia_Response;
let Digit_Go_Response;
let Field_output = "";
let RS_output = "";
let DG_output = "";
let DG_button_value;
let RS_button_value;

(function responseCallingFunction(){
    fetch("Royal_Sundaram_Response.json").then((res)=>{
        return res.json();
    }).then((data)=>{
        Royal_Sundaram_Response = data;
        royalSudaramTableCall();
        fetch("Digit_Go_Response.json").then((res)=>{
            return res.json();
        }).then((data)=>{
            Digit_Go_Response = data;
            digitGoTableCall();
        }).catch((err)=>{
            console.log("Error Occured",err);
        })
    }).catch((err)=>{
        console.log("Error Occured",err);
    });
})();

 function royalSudaramTableCall(){
    Object.keys(Royal_Sundaram_Response).forEach((key)=>{
        if (Royal_Sundaram_Response.hasOwnProperty(key)){
            let temp = Royal_Sundaram_Response[key];
            Object.keys(temp).forEach((key)=>{
                if(key == "LIABILITY" || key == "OD_PREMIUM" ){
                    let utemp = temp[key];
                    Object.keys(utemp).forEach((key)=>{
                        console.log(`${key} : ${utemp[key]}`);
                        RS_output +=`<tr><td>${utemp[key]}</td></tr>`;
                        Field_output +=`<tr><td>${key}</td></tr>`;
                        DG_output += `<tr><td>NA</td></tr>`;
                    })
                }
                
                if(!(key == "LIABILITY" || key == "OD_PREMIUM" || key == "Message" || key =="StatusCode" || key == "QUOTE_ID")){
                console.log(`${key} : ${temp[key]}`);
                if(key == "GROSS_PREMIUM"){
                    RS_button_value = temp[key];
                }
                RS_output +=`<tr><td>${temp[key]}</td></tr>`;
                Field_output +=`<tr><td>${key}</td></tr>`;
                DG_output += `<tr><td>NA</td></tr>`;
                }
                
            })
            
        }   
    })
    console.log(`${RS_output}`);
    console.log(`${Field_output}`);
    setRSTableValues(RS_output);
    setFieldTableValues(Field_output);
    setDGTableValues(DG_output);
}
function setRSTableValues(RS_output){
RS_output += `<tr><td><a href="../Royal_Sundaram_Proposal.html"><div class='form-control total btn btn-info' style="background: #2ecc71;" >Pay:<span class='amount'>${RS_button_value}</span></div></a></td></tr>`;    
const RS_Table = document.getElementById('Royal_Sundaram_Info_Values');
RS_Table.innerHTML = RS_output;
}
function setFieldTableValues(Field_output){
    const Field_Table = document.getElementById("commonInsuranceFields");
    Field_Table.innerHTML = Field_output;
}

function digitGoTableCall(){
    Object.keys(Digit_Go_Response).forEach(function(key) {
        let temp;
        let temp1;
        let temp2;
        let head;
        if(!(key == "coveragePremium" || key == "serviceTax" || key == "error" || key == "enquiryId")){
            console.log(`${key} : ${Digit_Go_Response[key]}`);
            if(key == "totalGrossPremium"){
            DG_button_value =  Digit_Go_Response[key];       
            }
            DG_output += `<tr><td>${Digit_Go_Response[key]}</td></tr>`;
            Field_output +=`<tr><td>${key}</td></tr>`;
            RS_output += `<tr><td>NA</td></tr>`;
            
            

        }
        if(key == "coveragePremium"){
             temp = Digit_Go_Response[key];
            Object.keys(temp).forEach(function(key) {
                if(key == "baseCoverPremium" || key == "additionalCoverPremium" ){
                     temp2 = temp[key];
                    Object.keys(temp2).forEach(function(key) {
                        if(key == 'thirdPartyLiabilityCover'|| key == "ownDamageCover" || key == "theftCover" || key == "fireCover" || key == 'paOwnerDriverCover' || key == "otherDriverCover"){
                            head = key;
                            temp3 = temp2[key];
                            Object.keys(temp3).forEach(function(key) {
                                console.log(`${head} --  ${key} : ${temp3[key]}`);
                                DG_output += `<tr><td>${temp3[key]}</td></tr>`;
                                Field_output +=`<tr><td>${head} --> ${key}</td></tr>`;
                                RS_output += `<tr><td>NA</td></tr>`;
                            })
                        }
                    })
                    
                }
               
                
            })
        }else if(key == "serviceTax"){
            temp = Digit_Go_Response[key];
            Object.keys(temp).forEach(function(key) {
                if(!(key == "cgst" || key == "sgst" || key == "igst" || key == "utgst")){
                    console.log(`${key} : ${temp[key]}`);
                    DG_output += `<tr><td>${temp[key]}</td></td>`;
                    Field_output +=`<tr><td>${key}</td></td>`;
                    RS_output += `<tr><td>NA</td></tr>`;
                }
                
            })
            

        }

    })
    setFieldTableValues(Field_output);
    setDGTableValues(DG_output);
    setRSTableValues(RS_output);

}

function setDGTableValues(DG_output){
    //DG_output += `<tr><td><button class="btn-info" value="pay">${DG_button_value}</button></td></tr>`;
    DG_output += `<tr><td><a href="../Digit_Go_Proposal.html"><div class='form-control total btn btn-info' style="background: #2ecc71;" >Pay:<span class='amount'>${DG_button_value}</span></div></a></td></tr>`;
    const DG_Table = document.getElementById('Digit_Go_Info_Values');
    DG_Table.innerHTML = DG_output;
}
