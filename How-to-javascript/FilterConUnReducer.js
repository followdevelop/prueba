let emails = ['add1@dominio1.com', 'add2@dominio2.com', 'add3@dominio3.com'];

let reducer = function(acc, currentEmail, index){
        if(index % 2 === 0){
        acc.push(currentEmail);
        }
};

let newEmails = emails.reduce(reducer, []);
console.log(newEmails);