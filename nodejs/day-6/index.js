// 6. File System (fs) - Writing & Appending Files
// Task: Write to a file and append a log using `fs.writeFile` and `fs.appendFile`.
// Bonus: Use a callback to confirm success.

const fs = require('fs');

fs.writeFile("text.txt", "Hi I am Ejajul Ansari", (err) => {
    if (err) {
        console.log(err);
    }
});

fs.appendFile('text.txt', "\nHi i am 24 years old", (err) => {
    if (err) {
        console.log(err);
    }
})