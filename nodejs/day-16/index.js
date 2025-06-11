// 2. Working with child_process
// Task: Spawn a command like `ls` or `dir`, and print its output in Node.
// Bonus: Use `exec()` and `spawn()` and compare.

const { spawn } = require('child_process');

const dir = spawn('cmd.exe', ['/c', 'dir']);

dir.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

dir.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

dir.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});