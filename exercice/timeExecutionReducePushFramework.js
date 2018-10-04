let frameworks = ["angular", "angular", "react"]
let resultados = {};

for(var i=0; i<1000; i++){
    frameworks.push("angular");
}

let reducer = function(accum, tag){
    if (accum[tag]){
        accum[tag] = accum[tag] + 1 //cuantas veces se repite
    } else {
        accum[tag] = 1;
    }
    return accum;
}
console.log(frameworks.reduce(reducer,resultados));

console.time("Reducer");
let counters = frameworks.reduce(reducer,{});
console.timeEnd("Reducer");
console.log(counters);