let Response_OTP;
let Entered_OTP;
let Login_Message;
let token;

(function modalShow(e){
    $(window).on('load', function () {
        $('#phoneModal').modal('show');
    });
})();

document.getElementById('send_OTP').addEventListener('click',OTPCall);
document.getElementById("OTP_Next").addEventListener('click',/*validateOTP */ sendOTPMock);
function OTPCall(){
    console.log("Check");
    document.getElementById("send_OTP").style.display = "none";
    document.getElementById("Enter_OTP").style.display = "block";
    document.getElementById("Resend_OTP_Div").style.display = "block";

    const phoneNumber = document.getElementById('Phone_Number').value;
    //sendOTP(phoneNumber);
    
}
function sendOTPMock(){
    window.location.href="vehicleReg.html";
}
function sendOTP(phoneNumber){
    fetch("http://188.42.97.27:8082/newLogin1",{
        
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
        },
        body: JSON.stringify({phone:phoneNumber}),
    
    }).then((res)=>{
         return res.json();  
    }).then((res)=>{
         console.log("LoginResponse",res);
        processLoginResponse(data);
    })
}
function processLoginResponse(data){
    console.log('Vignesh');
    let LoginResponse = data.response;
    LoginResponse = JSON.parse(LoginResponse);
    Login_Message = LoginResponse.message;
    token = LoginResponse.token;
    Response_OTP = LoginResponse.otp;
}

function validateOTP(){
    const Entered_OTP = document.getElementById('Enter_OTP').value;
    if(Response_OTP == Entered_OTP){
        window.location.href="vehicleReg.html";
    }else{
        alert("wrong_OTP");
    }
}