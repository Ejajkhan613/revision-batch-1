// 4. Object Creation & Property Access
// Create a `user` object and practice accessing/modifying properties using dot and bracket notation.


let user = {
    name: "Ejajul Ansari",
    age: 24,
    role: "Backend Developer"
};


console.log(user.name);
console.log(user['role']);

user.age = 25;
console.log(user);

console.log(delete user.age);
user.age = 24;

console.log(user);