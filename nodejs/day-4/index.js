// 4.Path & OS Modules

// Task: Use`path` and `os` to create a filepath string and get OS info(free mem, platform).

// Theory: Why are these modules useful?

const path = require('path');
const os = require('os');

let filePath = __dirname + __filename;
console.log(filePath);

console.log(os.freemem());
console.log(os.platform());
console.log(os.arch());



// Why are these modules useful?
/* These modules are provided by NodeJS to make NodeJS more powerful.
 * these modules provide deep access to the device where the NodeJS is installed.
 * Some of the modules are os, fs, path, http, etc.
*/