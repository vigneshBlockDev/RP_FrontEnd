(function setDetails(){
    let firstName = localStorage.getItem("First_Name");
    let lastName = localStorage.getItem("Last_Name");
    console.log(firstName);
    let fullname = firstName+" "+lastName;
    const name = document.getElementById("RS_Name");
    
    name.value =  fullname;
})();