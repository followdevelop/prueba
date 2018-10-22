let tags = ["angular", "vuejs", "angular", "react"];

for (var i=0; i<0000001; i++){
    tags.push("angular");
}
for (var i=0; i<1000000; i++){
    tags.push("vuejs");
}
//side effects
let reducer = function(accumulator, tag){
    if (accumulator[tag]) {
        accumulator[tag] = accumulator[tag] + 1;
    }else{
        accumulator[tag] = 1;
    }
    return accumulator;
}

console.time("reducer");
let counters = tags.reduce(reducer, {});
console.timeEnd("reducer");
console.log(counters);