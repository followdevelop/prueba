/* quokka js 
https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=
*/

let numbers = [34, 56, 7];

// par
let evens = numbers.filter(number => number % 2 === 0); 
console.log(evens);

//let pows = numbers.map(number => Math.pow(number, 2));
let squares = numbers.map(function (number) {
    return Math.pow(number, 2)
});
console.log(squares);

//let sum = numbers.reduce((acumulator, number) => acumulator + number, 0);
let reducer = (acumulator, number) => acumulator + number;
let sum = numbers.reduce(reducer, 0);
/*
let sum = numbers.reduce(function(acumulator, number) {
  return acumulator + number;
}, 0);
*/
console.log(sum);

numbers

let names = ["hola", "mundo", "funcional"];
let holaMundo = names.reduce((string, name) => string + " " + name, )
holaMundo
names

let people = [
    { name: "Milena", age: 22, genere: "F" },
    { name: "Jeisson", age: 26, genere: "M" },
    { name: "Valentina", age: 14, genere: "F" }
];

let children = people.filter(person => person.age < 18);
children

let men = people.filter(function (person) {
    return person.genere == "M";
});
men


// let ages = people.map(person => person.age);
let ages = people.map(function (person) {
  return person.age;
});
ages

//let sum2 = ages.reduce((carro, age) =>  carro + age);
let sum2 = ages.reduce((carro, age) =>
  carro + age);
sum2
let averagew = sum2 / ages.length
averagew

let average = ages.reduce((carro, age) => carro + age) / ages.length;
average

let students = people.map(person => {
    person.code = Math.random();
    return person;
});
students


