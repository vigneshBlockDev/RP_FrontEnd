(function setPremiumValues(){
    const RS_IDV = localStorage.getItem('RS_IDV');
    const RS_Premium = localStorage.getItem('RS_Premium');
    console.log("Check",RS_IDV);
    const RS_IDV_Label = document.getElementById("RS_IDV");
    RS_IDV_Label.value = RS_IDV;
    const RS_Premium_Input = document.getElementById("RS_Premium_Input");
    RS_Premium_Input.value = RS_Premium
    const RS_Premium_button = document.getElementById("RS_Premium");
    RS_Premium_button.innerHTML = RS_Premium;

    const BA_IDV = localStorage.getItem('BA_IDV');
    const BA_Premium = localStorage.getItem('BA_Premium');
    const BA_IDV_Label = document.getElementById("BA_IDV");
    BA_IDV_Label.value = BA_IDV;
    const BA_Premium_Input = document.getElementById("BA_Premium_Input");
    BA_Premium_Input.value = BA_Premium
    const BA_Premium_button = document.getElementById("BA_Premium");
    BA_Premium_button.innerHTML = BA_Premium;


    const DG_IDV = localStorage.getItem('DG_IDV');
    const DG_Premium = localStorage.getItem('DG_TotalPremium');
    if(typeof DG_IDV != undefined){
        const DG_IDV_Label = document.getElementById("DG_IDV");
        DG_IDV_Label.value = DG_IDV;
        const DG_Premium_Input = document.getElementById("DG_Premium_Input");
        DG_Premium_Input.value = DG_Premium;
        const DG_Premium_button = document.getElementById("DG_Premium");
        DG_Premium_button.innerHTML = DG_Premium;
    }else {
        console.log("Vignesh");
        const DG_IDV_Label = document.getElementById("DG_IDV");
        DG_IDV_Label.value = " ";
        const DG_Premium_Input = document.getElementById("DG_Premium_Input");
        DG_Premium_Input.value = " ";
        const DG_Premium_button = document.getElementById("DG_Premium");
        DG_Premium_button.innerHTML = " ";
    }
    


    
})();
