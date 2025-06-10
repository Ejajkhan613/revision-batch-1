// 1. Function Parameters, Default Values, Rest Parameters
// Write a function that accepts any number of arguments and returns their sum.

function sum(...args) {
    let sum = 0;
    for (let a = 0; a < args.length; a++) {
        sum += args[a];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));