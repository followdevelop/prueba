let numbers = [1,2,3,4];
let formaItinerada = numbers

let forForm=formaItinerada.map(function(number){
    return Math.pow(number,2);
})
formaItinerada
forForm

function transforNumbers(numbers){
for (let i=0; i<numbers.length; i++){
    numbers[i] = Math.pow(numbers[i],2);
}
    return numbers;
}
console.log(transforNumbers(numbers))
transforNumbers(numbers)