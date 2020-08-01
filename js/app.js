
window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number=document.getElementById('number').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert("Message sent");
    }).catch(function (error) {
        alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
        var user=result.user;
        document.getElementById('signup').innerHTML = '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7wy7za5hLjsjAAQ4YGa8W8XWb18WRCXMkIpW6YMMIxzE_Lg/viewform?embedded=true" width="300" height="1397" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>'
    }).catch(function (error) {
        alert(error.message);
    });
}
