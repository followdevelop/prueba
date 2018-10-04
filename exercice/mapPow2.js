let numbers = [1,2,3,4,5];

let cuadrado = numbers
let newNum= cuadrado.map(function(number){
    return Math.pow(number,2)
});
console.log(cuadrado)
console.log(newNum)