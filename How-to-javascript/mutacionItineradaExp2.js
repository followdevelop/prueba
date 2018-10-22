let numbers = [1,2,3,4];

function transformNumbers(numbers){
    for (let i=0; i<numbers.length; i++) {
        numbers[i] = Math.pow(numbers[i],2);
    }
    return numbers;
}

console.log(transformNumbers(numbers))
