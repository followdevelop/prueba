let emails = ["persona1@gmail.com", "add123@hotmail.com", "mujer@outlook.net", "a@d.com"];


// emails.filter(function (email){
//     return email.indexOf("net") > 0;
// })
let emailnet = emails.filter(function (email, index, array){
    console.log(index);
    return email.indexOf("net") > 0; //true  | false
})


emails
emailnet