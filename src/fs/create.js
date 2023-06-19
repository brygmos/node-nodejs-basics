import {access, writeFile,} from 'node:fs/promises';
import {join} from 'node:path';

const create = async () => {

    const filePath = join('files', 'fresh.txt');

    try {
        await access(filePath);
        throw new Error('FS operation failed: File already exists.');
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }
    await writeFile(filePath, 'I am fresh and young');

};

await create();