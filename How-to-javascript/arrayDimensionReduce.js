let arrays = [[3,5,6], ['a', 'b'], [5,9]];

let reducer = function(accumulator, array) {
    return accumulator.concat(array);
}

let arrayOneDimension = arrays.reduce(reducer, []);
console.log(arrayOneDimension);
arrays