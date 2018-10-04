let arrays = [[1,2,3,4],["hola", "mundo"],[54,21,45,65,1]];

arrays

let reducer = function(acumm, array){
    return acumm.concat(array);
}

let arrayUnaDimension = arrays.reduce(reducer, []);

console.log(arrayUnaDimension);