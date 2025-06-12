// 3. Immediately Invoked Function Expression (IIFE)
// Convert a closure into an IIFE and explain its use cases.


const count = (function () {
    let counter = 0;

    return function () {
        counter++;
        console.log(counter);
    };
})();

// Use Cases
/*
 We can create private states.
 It prevents variables to live longer in memory.
 It automatically calls himself.
*/