// 3. Higher - Order Array Methods(map, filter)
// Given a list of numbers, use`map` to double values and `filter` to extract even numbers.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let double = arr.map((item, index, arr) => {
    return item + item;
})

console.log("Double -", double);


let evenNumbers = double.filter((item, index, arr) => {
    return item % 2 == 0;
})
console.log("Even -", evenNumbers);
