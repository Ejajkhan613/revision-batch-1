// 2. Loops: for, while, for...of
// Loop through the array created yesterday and print each item.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let length = arr.length;

for (let a = 0; a < length; a++) {
    console.log(arr[a]);
}


let i = 0;
while (i < length) {
    console.log(arr[i]);
    i++;
}


i = 0;
do {
    console.log(arr[i]);
    i++;
} while (i < length);


for (let value of arr) {
    console.log(value);
}