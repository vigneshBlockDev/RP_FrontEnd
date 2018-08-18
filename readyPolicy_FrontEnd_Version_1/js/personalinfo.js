document.getElementById('personalinfo').addEventListener('click',addDetails);
(function modalShow(e){
    $(window).on('load', function () {
        $('#personelInfoModalLong').modal('show');
    });
})();
  
function addDetails(){
    const First_Name = document.getElementById("First_Name").value;
    const Last_Name = document.getElementById("Last_Name").value;
    const Email = document.getElementById("Email").value;
    const password = document.getElementById("password").value;
    const Address = document.getElementById("Address").value;
    const Age = document.getElementById("Age").value;
    date = new Date();
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    const todayDate = `${month}/${day}/${year}`;


    localStorage.setItem('First_Name',First_Name);
    localStorage.setItem('Last_Name',Last_Name);
    localStorage.setItem('Email',Email);
    localStorage.setItem('password',password);
    localStorage.setItem('Address',Address);
    localStorage.setItem('Age',Age);
    localStorage.setItem('todayDate',todayDate);

    window.location.href="Royal_Sundaram_Proposal.html";
}