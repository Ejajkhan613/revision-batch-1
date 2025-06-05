// 3. **Writing Files with Streams**

//     🔸 *Task:* Use `fs.createWriteStream()` to write data to a log file continuously.

//     🔸 *Combine:* Pipe input from read stream to write stream.



const fs = require('fs');

let data = fs.createReadStream('./data.txt', 'utf-8');
let output = fs.createWriteStream("./output.txt", 'utf-8');

// output.pipe(chunk);
data.on('data', (chunk) => {
    output.write(chunk);
})

data.on('end', () => {
    console.log('Data Written Successfully :)');
})

data.on('error', (error) => {
    console.log(error);
});