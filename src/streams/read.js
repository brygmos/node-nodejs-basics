const read = async () => {
    const fs = require('fs');

    const filePath = './files/fileToRead.txt';

    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    await new Promise((resolve, reject) => {
        readStream.on('end', resolve);
        readStream.on('error', reject);
    });
};

await read()