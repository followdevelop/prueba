//var resultado = arr.reduce(funcion[, valorInicial]);
let numbers = ["angular", "vuejs", "angular", "react"];
//let resultados = {};

//side effects
let reducer = function(accumulator, tag){
    if (accumulator[tag]) {
        accumulator[tag] = accumulator[tag] + 1;
    }else{
        accumulator[tag] = 1;
    }
    return accumulator;
}

console.log(numbers.reduce(reducer, {}));

