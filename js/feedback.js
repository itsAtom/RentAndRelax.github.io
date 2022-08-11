

const $ = (selector) => document.querySelector(selector);
document.addEventListener('DOMContentLoaded', () => {
    $('#name').addEventListener('change', validate);
    $('#email').addEventListener('change', validate);
    $('#message').addEventListener('change', validate);
    $('#btnsubmit').addEventListener('click', validate);
    $('#btnreset').addEventListener('click', reset);
  });
  //show deatails of related icon details on click of every icon
  function show(val)
    {
    var value = val;
    var element = document.getElementById(value);
    if(element.nextElementSibling.style.visibility == "hidden")
         element.nextElementSibling.style.visibility = "visible";
    else
        element.nextElementSibling.style.visibility = "hidden";
    }

const validate = () => {
  // get form controls to check for validity
    let name = document.querySelector('#name');
    const email = $('#email');
    let lenpattern = /^[a-zA-Z]{3,30}$/;
    let isValid = true;
    //validate Name
    if (name.value == '') 
    {
        name.nextElementSibling.innerHTML = 'Please enter first name';
        isValid=false;
    } 
    else if(!lenpattern.test(name.value))
    {
        name.nextElementSibling.innerHTML = "'Please enter alaphabtes only between 3 to 300 only!";
        isValid=false;
    } 
    else 
    {
        name.nextElementSibling.innerHTML = '';
        isValid=true;
    }
 
    // Validate Email Address
    if(email.value == "")
    {
        email.nextElementSibling.innerHTML = "Please Enter Email Address..";
        isValid=false;
    }
    else
    {
        email.nextElementSibling.innerHTML = " ";
    }
    //validate Message
    let msg=document.getElementById('msg');
    if(message.value == "")
    {
        msg.innerHTML = "Please Enter your message..";
        isValid=false;
    }  
    else
    {
        msg.innerHTML = " ";
        isValid=true;
    }

    // Show confirm message

    if (isValid == true) {
        document.getElementById("successmsg").style.visibility = "visible";
        reset();
    }
    
}
//reset button calls this reset function
function reset()
{
    $('form').reset();
    $('#email').nextElementSibling.innerHTML= '';
    $('#name').nextElementSibling.innerHTML= '';
    $('#msg').textContent = '';
    
   // $('#name').focus();   
}

