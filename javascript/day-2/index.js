// 2. Basic Operators & Type Coercion 
// Create expressions using arithmetic and logical operators. Demonstrate implicit and explicit type conversion.

console.log(3 + 3);
console.log(3 - 3);
console.log(3 / 3);
console.log(3 * 3);
console.log(3 % 3);

console.log(2 && 2);
console.log(2 || 2);
console.log(!true);



// Explicit type conversion
let string = "24";
console.log(Number(string));

let number = 23;
console.log(number.toString());



// Implicit type conversion
let str = "10";
let num = 10;

console.log(num + str);
console.log(typeof (num + str));