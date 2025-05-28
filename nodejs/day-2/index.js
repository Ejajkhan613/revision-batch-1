// 2. REPL & Global Objects
// Task: Use the REPL to explore`__dirname`, `__filename`, `global`, etc. 

const path = require('path');

let newPath = __dirname + __filename;
console.log(newPath);

global.setTimeout(() => {
    console.log("Working after 1 Second");
}, 1000);




// Theory: How do global variables in Node differ from the browser

// In browser: the global object is called as window
// any variable initiated with var keyword in top level becomes global variable, but not the let and const.
// We can access global variables using window.VARIABLE_NAME.

// In NodeJS: the global object is called as global
// Implicitly NodeJS do not support making any variable global, to do that we have to use global.VARIABLE_NAME = VALUE
// Reason is that NodeJS wraps each module into a function that have limited scope