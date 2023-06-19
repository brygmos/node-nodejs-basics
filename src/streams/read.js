import {
    createReadStream
} from 'node:fs';
import { join } from 'node:path';

const read = async () => {
    const filePath = join('files', 'fileToRead.txt')
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    await new Promise((resolve, reject) => {
        readStream.on('end', resolve);
        readStream.on('error', reject);
    });
};

await read()