let emails = ['alguien@gmail.com', 'persona1@hotmail.com', 'persona2@putlook.com'];

let emailsGmail = emails.filter(function(email, index, array){
    //return index % 1 === 0;
    return index % 2 === 0;
    console.log(index)
    console.log(array)
    //return email.indexOf("gmail.com") > 0;
})
emailsGmail