const btn = document.getElementById('button');
document.getElementById('login-box').style.visibility = 'visible';
document.getElementById('login-box2').style.visibility = 'hidden';


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.style.backgroundColor = 'green'; 
   btn.value = 'please wait.....';
   check();
  // setTimeout(check, 2000);

});


function check()
{
    const otp=document.getElementById('otp').value;
    if(otp == 9876){
        alert("Congratulations!!! OTP sucessfully match. Now, please reset the password for your account.");
        document.getElementById('login-box').style.visibility = 'hidden';
        document.getElementById('login-box2').style.visibility = 'visible';

    }
    else{
        alert("Fail!!!  please try again...");
        window.location.href="otp.html";
    }
}

function pass()
{
    const bt = document.getElementById('done');
    bt.style.backgroundColor = 'green'; 
    bt.value = 'please wait.....';

    var pass1=document.getElementById('pass1').value;
    var pass2=document.getElementById('pass2').value;
    console.log(pass1);
    console.log(pass2);
    if (pass1 == '' && pass2 == '')
    {
        alert("please enter the value");

    }
    if(pass1 == pass2)
    {
        alert("Password is reset!! Now you can log in your account.");
        window.location.href="login.html";
    }
    else{
        alert("error");
    }

}