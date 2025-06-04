// 2. Reading Files with Streams
// Task: Use `fs.createReadStream()` to stream a large file and log chunks.
// Bonus: Listen to the `data`, `end`, and `error` events.


const fs = require('fs');

let data = fs.createReadStream('./data.txt', 'utf-8');

data.on('data', (chunk) => {
    console.log(chunk);
})

data.on('end', () => {
    console.log('Data Steaming Completed :)');
})

data.on('error', (error) => {
    console.log(error);
})