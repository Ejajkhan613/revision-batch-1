// 6. Arrow Functions & Scoping

// Rewrite previous functions as arrow functions.Explore the difference in `this` binding.


// Function Declaration
function sayHello1() {
    console.log(this);
    return `Hello ${this.name1}`
}

// Function Expression (Arrow function do not support this keyword)
const sayHello2 = () => {
    console.log(this);
    return `Hello ${this.name}`;
}

let names = {
    name1: "Ejajul Ansari",
    name2: "John Doe"
}


let output1 = sayHello1.bind(names);
console.log(output1())

let output2 = sayHello2.bind(names);
console.log(output2())