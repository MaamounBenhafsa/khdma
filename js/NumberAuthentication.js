var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

function auth(){

    var number = '+82' + document.querySelector('input').value;
  
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('Phone Number');


        var 
            code = prompt('Put Phone Number Please', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log('Confirmed', result.user);

            document.querySelector('label').textContent += 'succes ' + result.user.phoneNumber;
            
        }).catch(function (error) {
            console.error('Error', error);
            
        });

    })
    .catch(function (error) {
        console.error('Error', error);

    });
  
}
