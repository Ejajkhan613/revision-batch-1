// 3. CommonJS Modules(`require`, `module.exports`)
// Task: Create two files and export/import a function using CommonJS.
// Bonus: Log the `module` object.

const { sum } = require('./sum');

console.log(sum(2, 3));
console.log(sum);

console.log(module);