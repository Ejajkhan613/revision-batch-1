// 1. Util Module & Promisify
// Task: Use `util.promisify()` to convert `fs.readFile()` into a Promise-based version.
// Theory: What is promisify and when do you need it?

const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

function readMyFilePromise() {
  readFilePromise('myFile.txt', 'utf8')
    .then(data => {
      console.log('File content (.then/.catch):', data);
    })
    .catch(err => {
      console.error('Error reading file (.then/.catch):', err);
    });
}

readMyFilePromise();


// What is util.promisify()
// util.promisify() is a utility function provided by Node.js, part of the built-in util module.
// Its primary purpose is to convert a function that follows
// the Node.js error-first callback style into a function that returns a Promise

// When Do You Need util.promisify()?
// We need util.promisify() primarily when we are working with older Node.js APIs or
// third-party libraries that still use the error-first callback pattern and
// we want to leverage modern asynchronous programming constructs like async-await or
// standard Promise chaining(.then(), .catch())