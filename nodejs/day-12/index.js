// 5. Creating a Basic HTTP Server

// Task: Create an HTTP server with `http.createServer()` and respond with plain text.

const http = require("http");

http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.write("Hello from Ejajul Ansari");
        res.end();
    }
}).listen(4000);



// Theory: What is the default behavior of an HTTP server?
/*
 HTTP server sends plain text to the client as a response. if the response contains the html tags then it sends it as a text/html
 and it do not support json or object data, to send it we need to convert the json or object into string.
*/
