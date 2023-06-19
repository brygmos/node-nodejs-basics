const { parentPort } = require('worker_threads');

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

let result = null;

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    console.log('hiiiiiiiiiiii');
    // parentPort.on('message', (data) => {
    //     console.log('5555555')
    //     console.log(data.number)
    //     result = nthFibonacci(data.number);
    //     console.log(result)
    //     parentPort.postMessage({status: 'resolved', data: result});
    // })
    parentPort.postMessage({status: 'resolved', data: nthFibonacci(10)});
};

parentPort.on('message', (data) => {
    console.log('5555555')
    console.log(data.number)
    result = nthFibonacci(data.number);
    console.log(result)
    parentPort.postMessage({status: 'resolved', data: result});
})


sendResult();