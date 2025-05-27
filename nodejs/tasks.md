## 🟩 **30-Day Node.js Fundamentals Practice Plan**

### 🔹 **Week 1: Environment, Modules, & Core Concepts**

1. **Intro to Node.js & Setup**
    
    🔸 *Task:* Install Node.js, run a basic `hello-world.js` script using `node`.
    
    🔸 *Theory:* What is Node.js? How does it differ from browser JavaScript?
    
2. **REPL & Global Objects**
    
    🔸 *Task:* Use the REPL to explore `__dirname`, `__filename`, `global`, etc.
    
    🔸 *Theory:* How do global variables in Node differ from the browser?
    
3. **CommonJS Modules (`require`, `module.exports`)**
    
    🔸 *Task:* Create two files and export/import a function using CommonJS.
    
    🔸 *Bonus:* Log the `module` object.
    
4. **Path & OS Modules**
    
    🔸 *Task:* Use `path` and `os` to create a filepath string and get OS info (free mem, platform).
    
    🔸 *Theory:* Why are these modules useful?
    
5. **File System (fs) - Reading Files**
    
    🔸 *Task:* Use `fs.readFile()` (callback version) to read and print file contents.
    
    🔸 *Theory:* How is async file reading different from sync?
    
6. **File System (fs) - Writing & Appending Files**
    
    🔸 *Task:* Write to a file and append a log using `fs.writeFile` and `fs.appendFile`.
    
    🔸 *Bonus:* Use a callback to confirm success.
    
7. **Theory Day: Node.js Architecture (Event Loop, Thread Pool, V8)**
    
    🔸 *Explain:* How Node.js handles I/O with a single thread.
    
    🔸 *Sketch:* Event loop + libuv concept.
    

---

### 🔹 **Week 2: Events, Buffers, Streams, HTTP**

1. **Events Module & Custom Emitters**
    
    🔸 *Task:* Create an event emitter that logs messages on a `message` event.
    
    🔸 *Theory:* How does the EventEmitter pattern relate to the Observer pattern?
    
2. **Reading Files with Streams**
    
    🔸 *Task:* Use `fs.createReadStream()` to stream a large file and log chunks.
    
    🔸 *Bonus:* Listen to the `data`, `end`, and `error` events.
    
3. **Writing Files with Streams**
    
    🔸 *Task:* Use `fs.createWriteStream()` to write data to a log file continuously.
    
    🔸 *Combine:* Pipe input from read stream to write stream.
    
4. **Buffer Basics**
    
    🔸 *Task:* Create a Buffer, write data to it, and convert it to a string.
    
    🔸 *Theory:* What’s the use case for Buffers in Node?
    
5. **Creating a Basic HTTP Server**
    
    🔸 *Task:* Create an HTTP server with `http.createServer()` and respond with plain text.
    
    🔸 *Theory:* What is the default behavior of an HTTP server?
    
6. **HTTP Routing (Manual)**
    
    🔸 *Task:* Extend the HTTP server to serve different responses on `/`, `/about`, and `/contact`.
    
    🔸 *Bonus:* Return 404 for unknown paths.
    
7. **Theory Day: Streams vs Buffers vs ReadFile**
    
    🔸 *Compare:* When and why to use each method of file reading.
    

---

### 🔹 **Week 3: Advanced Core Modules & Asynchronous JS in Node**

1. **Util Module & Promisify**
    
    🔸 *Task:* Use `util.promisify()` to convert `fs.readFile()` into a Promise-based version.
    
    🔸 *Theory:* What is promisify and when do you need it?
    
2. **Working with child_process**
    
    🔸 *Task:* Spawn a command like `ls` or `dir`, and print its output in Node.
    
    🔸 *Bonus:* Use `exec()` and `spawn()` and compare.
    
3. **Timers (setTimeout, setInterval) in Node**
    
    🔸 *Task:* Set a timer that logs after a delay, and one that repeats.
    
    🔸 *Theory:* Are these Node-native APIs or V8/browser shared?
    
4. **Process Object & Environment Variables**
    
    🔸 *Task:* Log `process.env`, `process.argv`, and exit codes.
    
    🔸 *Bonus:* Pass arguments from CLI.
    
5. **Error Handling & try/catch in Async**
    
    🔸 *Task:* Simulate an async function that might fail and use try/catch + `async/await`.
    
    🔸 *Theory:* Why must Promises be handled cautiously in Node?
    
6. **Directory Creation & File Management**
    
    🔸 *Task:* Use `fs.mkdir`, `fs.rename`, and `fs.unlink` to manage files/folders dynamically.
    
    🔸 *Bonus:* Create a recursive file generator.
    
7. **Theory Day: Callback Hell vs Promises vs Async/Await**
    
    🔸 *Draw:* An example tree of nested callbacks refactored to async/await.
    

---

### 🔹 **Week 4: npm, Express, and Intro to APIs**

1. **npm Init & Installing Packages**
    
    🔸 *Task:* Run `npm init`, install `lodash`, and use a method from it.
    
    🔸 *Theory:* What’s the difference between dependencies and devDependencies?
    
2. **Creating a Basic Express Server**
    
    🔸 *Task:* Set up a simple Express app with one `GET` route.
    
    🔸 *Compare:* Express vs core `http` server.
    
3. **Express Routing & Query Params**
    
    🔸 *Task:* Add dynamic routes and parse query parameters.
    
    🔸 *Example:* `/user/:id` → `/user/123`
    
4. **Handling POST Requests with Express**
    
    🔸 *Task:* Accept JSON input using `express.json()` middleware and return a confirmation.
    
5. **Middleware Basics in Express**
    
    🔸 *Task:* Create a custom middleware to log each request’s method and path.
    
    🔸 *Bonus:* Apply conditionally only on certain routes.
    
6. **Serving Static Files**
    
    🔸 *Task:* Serve an HTML file and a CSS file using `express.static()`.
    
7. **Theory Day: REST APIs and Node.js Project Structure**
    
    🔸 *Discuss:* MVC pattern in Express, separation of routes/controllers.
    
8. **Mini Project: File Uploader API**
    
    🔸 *Build:*
    
- POST endpoint to upload a text file
- Save to `/uploads`
- Return success response
- (Bonus: Validate file type/size)
1. **Mini Challenge: CLI Weather App**
    
    🔸 *Build:*
    
- Accept city name from command line
- Fetch data from a mock API
- Print formatted weather

---

### 🔧 Bonus (Optional Add-ons):

- Explore **dotenv**, **nodemon**, and **morgan**
- Use **Postman** to test APIs
- Connect to **MongoDB** in future months
- Learn about **cluster module** and scaling