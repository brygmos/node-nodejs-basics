const { Worker, isMainThread } = require('worker_threads');
const os = require('os');

const performCalculations = async () => {
    if (isMainThread) {
        const numCPUs = os.cpus().length;
        const workers = [];
        const counter = 10;

        for (let i = 0; i < numCPUs; i++) {
            workers.push(new Worker('./worker.js', { workerData: counter + i }));
        }

        const results = await Promise.all(
            workers.map((worker) => new Promise((resolve) => {
                worker.on('message', (m) => resolve({ status: 'resolved', data: m }));
                worker.on('error', () => resolve({ status: 'error', data: null }));
            })),
        );

        console.log(results)

    }

};

await performCalculations();