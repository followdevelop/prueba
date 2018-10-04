frameworks = ["angular", "angular", "react"]
let resultados = {};

let reducer = function(accum, tag){
    if (accum[tag]){
        accum[tag] = accum[tag] + 1 //cuantas veces se repite
    } else {
        accum[tag] = 1;
    }
    return accum;
}
console.log(frameworks.reduce(reducer,resultados));