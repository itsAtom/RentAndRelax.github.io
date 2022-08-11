"use strict";
$(document).ready( () => 
{


    // handle click on login button
    $("#login").click( () => {
        const name = $("#username").val();
        const pass = $("#password").val(); 
        const type=$('input[name="type"]:checked').val();

        console.log(name);
        console.log(pass);
        console.log(type);

        let isValid = true;


        // validate the email address or username
        if (name === "") { 
            $("#username").next().text("This field is required.");
            isValid = false;
        } else {
            $("#username").next().text("");
        } 
        
        // validate the password
        if (pass === "") { 
            $("#password").next().text("This field is required.");
            isValid = false; 
        } 
        else {
            $("#email_2").next().text("");
        }

        // submit the form if all entries are valid
        if (isValid && type=="buyer") {
          
            $("#email_form").submit();
            window.location.href="homepage_buyer.html";
        }
        else if(isValid && type=="seller"){
            window.location.href="homepage_owner.html";
        }

        // for admin login only
        if(isValid && name =="admin" && pass=="1234")
        {
            $("#email_form").submit();
            window.location.href="admin.html";

        }
    });



});