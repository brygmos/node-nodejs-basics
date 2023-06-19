import {createWriteStream} from 'node:fs';
import {join} from 'node:path';

const write = async () => {
    const filePath = join('files', 'fileToWrite.txt')
    const writeStream = createWriteStream(filePath);
    console.log('type something: (Ctrl+C to quit)')

    process.stdin.pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await write()