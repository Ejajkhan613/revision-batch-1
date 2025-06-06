// 4. Buffer Basics
    
// Task: Create a Buffer, write data to it, and convert it to a string.

const buffer = Buffer.alloc(20);

buffer.write('Ejajul Ansari');

const result = buffer.toString();

console.log(result);


    
// Theory: What’s the use case for Buffers in Node?

/*
 Buffers are not a part of core javascript, instead it is added in nodejs for extra features like
 File System, Networking, Input/Output, etc.
*/