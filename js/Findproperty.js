window.onload = function () {
    document.getElementById('submit').onclick = validate;
  };
  function validate() {
    //alert('in function');
    let budget1 = document.querySelector('#budget');
    let namepattern = /^(\d+(\.\d+)?)$/;
    let visited1 = document.querySelector('#visited');
    let namepattern1 = /^(?:Yes|No)$/;
    let length2 = document.querySelector('#length');
    let namepattern2 = /^[a-zA-Z]{3,}$/;
      
    if (budget1.value == '') {
        budget1.nextElementSibling.innerHTML = 'Please enter your estimated budget';
      } else if (!namepattern.test(budget1.value)) {
        budget1.nextElementSibling.innerHTML =
          'please enter budget in numbers';
      } else {
        budget1.nextElementSibling.innerHTML = 'valid budget';
      }
      if (visited1.value == '') {
        visited1.nextElementSibling.innerHTML = 'This is required feild';
      } else if (!namepattern1.test(visited1.value)) {
        visited1.nextElementSibling.innerHTML =
          'please type answer in yes or no';
      } else {
        visited1.nextElementSibling.innerHTML = 'Thanks for reply';
      }
      if (length2.value == '') {
        length2.nextElementSibling.innerHTML = 'please enter characters only and please input atleast 3 charachters';
      } else if (!namepattern2.test(length2.value)) {
        length2.nextElementSibling.innerHTML =
          'please dont exceed charachter limits';
      } else {
        length2.nextElementSibling.innerHTML = 'Thanks for reply';
      }
      

  }
  