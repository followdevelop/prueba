let emails = ['alguien@gmail.com', 'persona1@hotmail.com', 'persona2@putlook.com'];

let emailsGmail = emails.filter(function(email){
    return email.indexOf("gmail.com") > 0;
})
emailsGmail