// 1. Events Module & Custom Emitters
    
// Task: Create an event emitter that logs messages on a `message` event.
    

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();


eventEmitter.on("message", (data)=>{
    console.log(data);
})

eventEmitter.emit("message", "Hello Ejajul");



// Theory: How does the EventEmitter pattern relate to the Observer pattern?

/*
 The Observer pattern is a design pattern in which the subject(emit()) maintains the list of observers(on())
 when it is called by emit they all start using event handling system.
*/