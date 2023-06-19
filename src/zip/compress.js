import {
    createWriteStream, createReadStream
} from 'node:fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const filePath = './files/fileToCompress.txt';

    const readStream = createReadStream(filePath);

    const writeStream = createWriteStream('./files/archive.gz');

    const gzipStream = createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await compress();