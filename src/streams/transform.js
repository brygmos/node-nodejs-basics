const transform = async () => {
    const { Transform } = require('stream');

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        },
    });

    console.log('type something: (Ctrl+C to quit)')

    process.stdin.pipe(transformStream).pipe(process.stdout);

    await new Promise((resolve) => {
        process.stdin.on('end', resolve);
    });
};

(async () => {await transform()})()