const write = async () => {
    const fs = require('fs');

    const filePath = './files/fileToWrite.txt';

    const writeStream = fs.createWriteStream(filePath);
    console.log('type something: (Ctrl+C to quit)')

    process.stdin.pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await write()