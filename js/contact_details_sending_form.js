window.onload = function() 
{
    document.getElementById('submit').onclick = validate;
}

function validate()
{
    let fname2= document.querySelector("#fname");
    let lname2= document.querySelector("#lname");
    let email2= document.querySelector("#email");
    let namepattern = /^[a-zA-Z]{3,30}$/;
    
    if(fname2.value == "")
    {
        fname2.nextElementSibling.innerHTML = "Enter your first name"
        fname2.style.border= "1px dashed red";
        fname2.nextElementSibling.style.color= "red";
    }
    else if (!namepattern.test(fname2.value))
    {
        fname2.nextElementSibling.innerHTML =
        "Enter letter only"
    }
    else
    {
        true
    }

    if(lname2.value == "")
    {
        lname2.nextElementSibling.innerHTML = "Enter your last name"
        lname2.style.border= "1px dashed red";
        lname2.nextElementSibling.style.color= "red";
    }
    else if (!namepattern.test(lname2.value))
    {
        lname2.nextElementSibling.innerHTML =
        "Enter letter only"
    }
    else
    {
        true
    }

    if(email2.value == "")
    {
        email2.nextElementSibling.innerHTML = "Enter your email name"
        email2.style.border= "1px dashed red";
        email2.nextElementSibling.style.color= "red";
    }
    else
    {
        true
    }
}

