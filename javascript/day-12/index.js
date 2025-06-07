// 5. Nested Objects & Looping through Objects  
// Extend the `user` object with nested structures (like `address`, `contacts`). Loop through using `for...in`.


let user = {
    name: "Ejajul Ansari",
    address: {
        locality: "Sangam Vihar",
        state: "Delhi"
    },
    contact: {
        email: "ejajul.masai@gmail.com",
        github: "www.github.com/Ejajkhan613"
    }
}

for (let key in user) {
    if (typeof user[key] === 'object') {
        console.log(`${key}:`);
        for (let innerKey in user[key]) {
            console.log(`  ${innerKey}: ${user[key][innerKey]}`);
        }
    } else {
        console.log(`${key}: ${user[key]}`);
    }
}