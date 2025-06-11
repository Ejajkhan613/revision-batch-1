// 2. Closures: Create a Counter Function
// Create a function `createCounter()` that returns an increment function with internal count.


function createCounter(){
    let count = 0;
    return function increment(){
        count++;
        return count;
    }
}

let a = createCounter();
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());