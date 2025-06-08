// 6. HTTP Routing (Manual)
// Task: Extend the HTTP server to serve different responses on `/`, `/about`, and `/contact`.
// Bonus: Return 404 for unknown paths.

const http = require("http");

http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.write("Hello from HomePage");
        res.end();
    } else if (req.url == "/about" && req.method == "GET") {
        res.write("Hello from About Page");
        res.end();
    } else if (req.url == "/contact" && req.method == "GET") {
        res.write("Hello from HomePage");
        res.end();
    } else {
        res.write("404 Error, Page not found");
        res.end();
    }
}).listen(4000);