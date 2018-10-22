let numbers = [34,56,7];

function transformNumbers(numbers){
    for(let i=0; i<numbers.length; i++) {
        numbers [i] = Math.pow(numbers[i],2);
    }

    return numbers;
}
console.log(transformNumbers(numbers));