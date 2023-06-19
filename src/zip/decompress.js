import {
    createWriteStream, createReadStream
} from 'node:fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const filePath = './files/fileToCompress.txt';

    const readStream = createReadStream('./files/archive.gz');

    const writeStream = createWriteStream(filePath);

    const gunzipStream = createGunzip();

    readStream.pipe(gunzipStream).pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await decompress();