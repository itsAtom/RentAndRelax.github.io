window.onload = function () {
    document.getElementById('post').onclick = validate;
  };
  
  function validate() {
    //alert('in function');
    let fname2 = document.querySelector('#fname');
    let lname2 = document.querySelector('#lname');
    let phone2 = document.querySelector('#phone');
    let email2 = document.querySelector('#email');

    let flat2 = document.querySelector('#flat');
    let landmark2 = document.querySelector('#landmark');
    let city2 = document.querySelector('#city');
    let state2 = document.querySelector('#state');
    let zip2 = document.querySelector('#zip');
    let country2 = document.querySelector('#country');
    
    let namepattern = /^[a-zA-Z]{3,30}$/;
    let numberpattern = /^[0-9]{10}/;
    let emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //console.log(fname2.parentNode.children);
    if (fname2.value == '') {
      fname2.nextElementSibling.innerHTML = '*Please enter first name';
    } else if (!namepattern.test(fname2.value)) {
      fname2.nextElementSibling.innerHTML = '*Please enter first name with letter only';
    } else {
      fname2.nextElementSibling.innerHTML = '*valid first name';
    }

    if (lname2.value == '') {
        lname2.nextElementSibling.innerHTML = '*Please enter last name';
    } else if (!namepattern.test(lname2.value)) {
    lname2.nextElementSibling.innerHTML = '*Please enter last name with letter only';
    } else {
    lname2.nextElementSibling.innerHTML = '*valid last name';
    }

    if (phone2.value == '') {
        phone2.nextElementSibling.innerHTML = '*Please enter phone Number';
    } else if (!numberpattern.test(phone2.value)) {
    phone2.nextElementSibling.innerHTML = '*Please enter numbers in this field';
    } else {
    phone2.nextElementSibling.innerHTML = '*valid phone number';
    }

    
    if (email2.value == '') {
      email2.nextElementSibling.innerHTML = '*Please enter email address';
    } else if (!emailpattern.test(email2.value)) {
      email2.nextElementSibling.innerHTML = '*Please enter valid email';
    } else {
      email2.nextElementSibling.innerHTML = '*valid email address';
    }

    // flat
  if (flat2.value == '') {
    flat2.nextElementSibling.innerHTML = '*Please enter value';
  }

  // landmark
  if (landmark2.value == '') {
    landmark2.nextElementSibling.innerHTML = '*Please enter landmark';
  }

  //city
  if (city2.value == '') {
    city2.nextElementSibling.innerHTML = '*Please enter city';
  }


  // state
  if (state2.value == '') {
    state2.nextElementSibling.innerHTML = '*Please enter city';
  }

  //zip
  if (zip2.value == '') {
    zip2.nextElementSibling.innerHTML = '*Please enter zip';
  }

  //country
  if (country2.value == '') {
    country2.nextElementSibling.innerHTML = '*Please enter country';
  }
    
  }



  
  