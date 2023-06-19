import {access, readdir} from 'node:fs/promises';
import {join} from 'node:path';

const list = async () => {
    const filesDirPath = join('files');

    try {
        await access(filesDirPath);
    } catch (err) {
        throw err.code === 'ENOENT' ? new Error('FS operation failed: Directory does not exist.') : err;
    }

    const fileNames = await readdir(filesDirPath);

    console.log(fileNames);
};

await list();