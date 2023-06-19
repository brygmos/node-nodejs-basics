import {access, readFile} from 'node:fs/promises';
import {join} from 'node:path';

const read = async () => {
    const filePath = join('files', 'fileToRead.txt');

    try {
        await access(filePath);
    } catch (err) {
        throw err.code === 'ENOENT' ? new Error('FS operation failed: File does not exist.') : err;
    }

    const fileContentBuffer = await readFile(filePath);

    console.log(fileContentBuffer.toString());
};

await read()