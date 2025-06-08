// 6. Destructuring & Spread Operator
// Destructure properties from objects / arrays.Use the spread operator to merge objects.


let user = {
    uName: "Ejajul Ansari",
    age: 24,
    role: "Backend Developer"
}

let { uName, age, role } = user;

console.log(uName, age, role);


let user2 = {
    ...user,
    uName: "John Doe"
}

console.log(user2);