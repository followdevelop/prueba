let arrays = [[1,2,3,4],["hola", "mundo"],[54,21,45,65,1]];

arrays
for(var i=0; i<10; i++){
    arrays.push("hola");
}

let reducer = function(acumm, array){
    return acumm.concat(array);
}

let reducer2 = function(accum, tag){
    if (accum[tag]){
        accum[tag] = accum[tag] + '1' //cuantas veces se repite
    } else {
        accum[tag] = 1;
    }
    return accum;
}

let arrayUnaDimension = arrays.reduce(reducer, []);

console.log(arrayUnaDimension);
console.time("Reducer");
let counters = arrays.reduce(reducer2,[]);
console.timeEnd("Reducer");
console.log(counters);