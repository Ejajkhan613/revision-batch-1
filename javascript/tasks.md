### 🔁 **JavaScript Monthly Practice Plan (30 Days)**

---

### **Week 1: Fundamentals & Core Concepts**

1. **Variables & Data Types**
    
    Declare different types of variables (let, const) and explore primitive types (string, number, boolean, null, undefined, symbol, bigint).
    
2. **Basic Operators & Type Coercion**
    
    Create expressions using arithmetic and logical operators. Demonstrate implicit and explicit type conversion.
    
3. **String and Template Literals**
    
    Concatenate strings using `+`, then rewrite using template literals. Include a variable in a sentence.
    
4. **Conditional Statements (if, else, ternary)**
    
    Create a program that checks if a person is eligible to vote using `if-else`, and then optimize with the ternary operator.
    
5. **Functions Declaration vs Expression**
    
    Write the same function using a declaration and an expression. Discuss **hoisting** behavior of each.
    
6. **Arrow Functions & Scoping**
    
    Rewrite previous functions as arrow functions. Explore the difference in `this` binding.
    
7. **Theory Day: Execution Context, Call Stack & Hoisting**
    
    Explain how JavaScript runs your code (Global Execution Context, Function Execution Context, Hoisting rules).
    

---

### **Week 2: Arrays, Loops, and Objects**

1. **Array Basics: CRUD operations**
    
    Perform create, read, update, delete operations on an array of strings.
    
2. **Loops: for, while, for...of**
    
    Loop through the array created yesterday and print each item.
    
3. **Higher-Order Array Methods (map, filter)**
    
    Given a list of numbers, use `map` to double values and `filter` to extract even numbers.
    
4. **Object Creation & Property Access**
    
    Create a `user` object and practice accessing/modifying properties using dot and bracket notation.
    
5. **Nested Objects & Looping through Objects**
    
    Extend the `user` object with nested structures (like `address`, `contacts`). Loop through using `for...in`.
    
6. **Destructuring & Spread Operator**
    
    Destructure properties from objects/arrays. Use the spread operator to merge objects.
    
7. **Theory Day: Difference between Primitive vs Reference types**
    
    Explain how assignment and copying work for objects vs primitives.
    

---

### **Week 3: Functions, Scope, Closures, and DOM**

1. **Function Parameters, Default Values, Rest Parameters**
    
    Write a function that accepts any number of arguments and returns their sum.
    
2. **Closures: Create a Counter Function**
    
    Create a function `createCounter()` that returns an increment function with internal count.
    
3. **Immediately Invoked Function Expression (IIFE)**
    
    Convert a closure into an IIFE and explain its use cases.
    
4. **DOM Basics: Selecting and Manipulating Elements**
    
    Use `document.querySelector` to change text/content of an element.
    
5. **Event Listeners & Event Object**
    
    Add a button to HTML. Attach a click event that logs the event object.
    
6. **Event Delegation & Bubbling**
    
    Add a list of items. Attach a single event listener on parent to handle all clicks.
    
7. **Theory Day: Scope Chain, Lexical Scope, and Closures**
    
    Describe with examples how variables are resolved through scopes.
    

---

### **Week 4: Asynchronous JavaScript, OOP, Modules**

1. **setTimeout, setInterval**
    
    Create a timer that logs numbers every second. Stop it after 5 counts.
    
2. **Promises & then/catch**
    
    Simulate a network call using a Promise that resolves after 2 seconds. Handle it using `.then`.
    
3. **Async/Await with Error Handling**
    
    Rewrite the previous example with `async/await` and handle errors with `try/catch`.
    
4. **Fetch API (Mock)**
    
    Use the `fetch()` API to retrieve data from a public API (or mock data) and display it on a webpage.
    
5. **Object-Oriented Programming (Constructor Functions)**
    
    Create a `Person` constructor with `name` and `age`, and a method to greet.
    
6. **Classes, Inheritance, Static Methods**
    
    Rewrite previous constructor as a class. Create a `Student` subclass.
    
7. **Modules (ES6 import/export)**
    
    Split the class and related methods into two files/modules. Import them to use.
    
8. **Theory Day: Event Loop, Microtasks, and Callbacks vs Promises**
    
    Explain how JavaScript handles async code in event loop, job queues, and how Promises work internally.
    
9. **Mini Project Challenge: To-Do App (Cumulative)**
    
    Build a mini To-Do list web app:
    
- Add tasks (DOM, forms)
- Store tasks in an array (array methods)
- Filter completed/incomplete (filter)
- Persist in localStorage (bonus)