window.onload = function () {
    document.getElementById('register').onclick = validate;
  };
  
  function validate() {
    //alert('in function');
    let fname2 = document.querySelector('#funame');
    let namepattern = /^[a-zA-Z]{3,30}$/;
    let username2=document.querySelector('#username');
    let namepattern2 = /^[a-zA-Z][a-zA-Z0-9-_]{4,24}$/;
    let email2=document.querySelector('#email');
    let namepattern3= /^(\w\.?)+@[\w\.-]+\.\w{2,}$/;
    let phonenumber2=document.querySelector('#phonenumber');
    let namepattern4= /^\d{10}$/;
    let password2=document.querySelector('#password');
    let namepattern5= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    let confirmpassword2=document.querySelector('#confirmpassword');
    let namepattern6= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    




    if (fname2.value == '') {
        fname2.nextElementSibling.innerHTML = 'Please enter full name';
      } else if (!namepattern.test(fname2.value)) {
        fname2.nextElementSibling.innerHTML =
          'Please enter full name with letter only';
      } else {
        fname2.nextElementSibling.innerHTML = 'valid full name';
      }
      if (username2.value == '') {
        username2.nextElementSibling.innerHTML = 'Please enter user name';
      } else if (!namepattern2.test(username2.value)) {
        username2.nextElementSibling.innerHTML =
          'Please enter character as first letter for your username';
      } else {
        username2.nextElementSibling.innerHTML = 'valid user name';
      }
      if (email2.value == '') {
        email2.nextElementSibling.innerHTML = 'Please enter email address';
      } else if (!namepattern3.test(email2.value)) {
        email2.nextElementSibling.innerHTML =
          'Please enter valid email address';
      } else {
        email2.nextElementSibling.innerHTML = 'valid email address';
      }
      if (phonenumber2.value == '') {
        phonenumber2.nextElementSibling.innerHTML = 'Please enter phone number';
      } else if (!namepattern4.test(phonenumber2.value)) {
        phonenumber2.nextElementSibling.innerHTML =
          'Please enter valid phone number';
      } else {
        phonenumber2.nextElementSibling.innerHTML = 'valid phone number';
      }
      if (password2.value == '') {
            password2.nextElementSibling.innerHTML = 'Please password';
      } else if (!namepattern5.test(password2.value)) {
        password2.nextElementSibling.innerHTML =
          'Please enter strong password with  atleast one numeric digit,special charachter and letter between 7-15';
      } else {
        password2.nextElementSibling.innerHTML = 'valid password';
      }
      if (confirmpassword2.value == '') 
      {
        confirmpassword2.nextElementSibling.innerHTML = 'Please enter confirm password';
        }    
         else if (!namepattern6.test(confirmpassword2.value)) 
        {
        confirmpassword2.nextElementSibling.innerHTML =
                                    'Password did not matched with original password';
        }          
        else
        {
            confirmpassword2.nextElementSibling.innerHTML = 'Password Matched';
        }
   //----commenmt--     
}