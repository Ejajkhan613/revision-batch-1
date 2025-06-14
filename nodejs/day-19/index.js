// 5. Error Handling & try/catch in Async
    
// Task: Simulate an async function that might fail and use try/catch + `async/await`.
    


// Simulated async function that might fail
async function fun() {
    let random = Math.random();
    if (random > 0.5) {
        return "success";
    } else {
        throw new Error("something went wrong");
    }
}

// Using async/await with try/catch
async function run() {
    try {
        const result = await fun();
        console.log(result);
    } catch (error) {
        console.error("error:", error.message);
    }
}

run();


// Theory: Why must Promises be handled cautiously in Node?
/*
 Promises can fail just like errors in normal code,
 If we dont use try catch or then catch, our app can crash
 In nodejs any unknown error can shut down the server by default
*/