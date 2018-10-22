let numbers = [34,56,7];
let nombres = ["jeisson","valen","unapersona"];

let newNum = numbers.map(number => Math.pow(number, 2));

let reducer = function(accumulador, number){
    return accumulador + number;
}

console.log(numbers.reduce(reducer, 0));
console.log(nombres.reduce(reducer, 0));


newNum
numbers