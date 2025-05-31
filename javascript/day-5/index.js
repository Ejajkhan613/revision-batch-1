// 5. Functions Declaration vs Expression
// Write the same function using a declaration and an expression. Discuss "hoisting" behavior of each.

// Fuction Declaration
function sayHello(name = "User") {
    return `Hello ${name}`;
}

console.log(sayHello("Ejajul Ansari"));

// Function Expression
const sayHello2 = (name = "User") => {
    return `Hello ${name}`;
}


console.log(sayHello2("Ejajul Ansari"));


// Hoisting
/*
 Function Declaration: It will be hoisted on top and we can call it from anywhere
 Function Expression: It will not be hoisted and we have to first define the function
 expression then we can only call it below.
*/