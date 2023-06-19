const { spawn } = require('child_process');
const { stdout, stdin} = require('node:process')

const spawnChildProcess = async (args) => {
    return new Promise((resolve, reject) => {
        const child = spawn('node', ['files/script.js', ...args], {
            stdio: [process.stdin, 'pipe', 'pipe'],
        });

        child.stdout.on('data', (data) => {
            console.log(`Received data from script.js: ${data}`);
            stdout.write(data);
        });

        child.on('error', (err) => {
            reject(err);
        });

        child.on("close", () => {
            resolve();
        });

    });
};

spawnChildProcess(["arg1", "arg2"]);
