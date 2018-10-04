let arrays = [[1,2,3,4], ['a','b','c','d'], [9,8,7,4,6,4]];

let reducer = function(acumm, array){
    return acumm.concat(array);
}

let numbers = arrays 
            .reduce(reducer,[])
            .filter((item) => ! isNaN(item));

console.log(numbers);
numbers
arrays
