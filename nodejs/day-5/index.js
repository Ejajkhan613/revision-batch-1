// 5. File System(fs) - Reading Files
// Task: Use`fs.readFile()`(callback version) to read and print file contents.

const fs = require('fs');

// Read File
fs.readFile('index.js', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    console.log(data);
})


// Theory: How is async file reading different from sync ?
/*
 Async file reading is a better approach, because it do not block the other operations,
 but Sync do block the other operations until the current operation is not completed or got an error.
 Async file reading operation goes directly into queue, then once resolved it goes to task queue to go into callstack.
*/