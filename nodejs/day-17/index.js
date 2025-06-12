// 3. Timers (setTimeout, setInterval) in Node
    
// Task: Set a timer that logs after a delay, and one that repeats.
    
// Theory: Are these Node-native APIs or V8/browser shared?

setTimeout(()=>{
    console.log("I waited for 3 seconds");
}, 3000);

setInterval(()=>{
    console.log("I call myself at every 3 seconds");
},3000);


// Are these Node-native APIs or V&/browser shared?
// These apis are also in browsers, so we can say that these apis are taken from browers by nodejs