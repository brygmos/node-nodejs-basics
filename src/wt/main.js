const { Worker, isMainThread } = require('worker_threads');
const os = require('os');

const performCalculations = async () => {
    if (isMainThread) {
        const numCPUs = os.cpus().length;
        const workers = [];
        const promises = [];

        for (let i = 0; i < numCPUs; i++) {
            workers.push(new Worker('./worker.js'));
            promises.push(
                new Promise((resolve) => {
                    workers[i].on('message', ({ status, data }) =>
                        resolve({
                            status,
                            data,
                        })
                    );
                })
            );
        }

        let counter = 10;

        await Promise.all(
            promises.map((promise) => {
                return promise.then(({ status, data }) => ({
                    status: status === 'resolved' ? 'resolved' : 'error',
                    data,
                }));
            })
        );

        console.log('==============================================')

        for (const worker of workers){
            worker.postMessage({number: counter++});
        }

        // Wait until all Promises are resolved
        const resultArray = await Promise.all(promises);

        console.log(resultArray);

    } else {
        console.log('main thread')
        // Receive message from main thread
        // parentPort.on("message", ({ number })=>{
        //
        //     try{
        //         const incrementedNumber = number + 1;
        //         parentPort.postMessage({status: 'resolved', data: incrementedNumber});
        //     }catch(error){
        //         parentPort.postMessage({status: 'error',data: null});
        //     }
        // });
    }

};

(async () => {await performCalculations()})();