let emails = ["persona1@gmail.com", "add123@hotmail.com", "mujer@outlook.net", "a@d.com"];

//filter
let reducer = function (acc, currentEmail, index){
    if (index % 1 === 0){
        acc.push(currentEmail);
    }
    return acc;
}

// console.time("Reducer");
// console.timeEnd("Reducer");

// console.time("Filter");
// console.timeEnd("Filter");
console.time("Reducer");
emails.reduce(reducer, []);
console.timeEnd("Reducer");

console.time("Filter");
emails.filter(function(item, index){
    return index % 1 === 0;
});
console.timeEnd("Filter");

emails