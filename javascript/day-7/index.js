// 7. Theory Day: Execution Context, Call Stack & Hoisting
    
// Explain how JavaScript runs your code (Global Execution Context,
// Function Execution Context,
// Hoisting rules).


/*
 Global Execution Context

 When we run our code, JavaScript first creates a main space to work in it.
 This space is called the Global Execution Context.

 It is created for two main works:
 1. Creation Phase ("Memory Setup Phase")
 2. Execution Phase ("Runs Code Line By Line")

 1. Creation Phase: JavaScript scans the file before running any code.
    - In this phase JavaScript creates "Window Object" in browser and "Global Object" in NodeJS.
    - In this phase JavaScript creates "this" variable that points to "Global Object".
    - In this phase JavaScript stores variables and functions default values in memory.

 2. Execution Phase
    - In this phase JavaScript starts running the code.
    - In this phase JavaScript starts assigning the variable values and operations.
*/

/*
 Function Execution Context

 When we run our functions, JavaScript first creates a mini space or world to work in it.
 This space is called the Function Execution Context.

 It is created for two main works:
 1. Creation Phase ("Memory Setup Phase")
 2. Execution Phase ("Runs Code Line By Line")

 1. Creation Phase: JavaScript creates a new scope (new box of memory).
    - Arguments Object is created based on arguments passed to the function
    - Sets up "Local Variables"
    - Sets up "Global Variables"
    - Sets up "this" keyword based on where the function is called
 
 2. Execution Phase
    - In this phase JavaScript starts running the code.
    - In this phase JavaScript starts assigning the variable values and operations.

 Once the Execution is Completed the function scope and its memory is removed.
*/

/*
 Hoisting

 JavaScript moves Variables and Functions to the top of the current scope before running the code.

 var: Its value is defined with undefined
 function: Entire function is moved to top

 let, const: They are also hoisted but we not initialized to access it
 function expression: They are treated as a normal variable and only variable is hoisted not the function
*/