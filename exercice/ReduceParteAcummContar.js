numbers = [1,2,3,4,5,6,7,8,9]
let newNum =numbers;

let reducer = function(accum, number){
    console.log(accum,number);
    return accum + number;
}
console.log(numbers.reduce(reducer,0));

newNum
reducer
