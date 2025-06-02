// 7. Theory Day: Node.js Architecture (Event Loop, Thread Pool, V8)
// Explain: How Node.js handles I/O with a single thread.


/*
 How Node.js handles I/O with a single thread

 NodeJS uses non-blocking I/O and an event loop to handle many tasks at once without waiting for
 one to finish before startin another.

 NodeJS separates every task based on the operation like Synchronous or Asynchronous.
 If the task is synchronous then it directly runs it
 If the task is asynchronous:
    - For I/O tasks (like reading files, talking to databases, or network requests),
      it often uses the operating system's async features, so it doesn't need a thread from Node.js.
    
      - For tasks that need computation or can’t be offloaded to the OS (like DNS lookup or file system tasks on some platforms),
      Node.js uses a thread pool (managed by a library called libuv) to do the work in the background.
*/