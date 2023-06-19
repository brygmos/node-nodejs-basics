import {access} from 'node:fs/promises';
import {join} from 'node:path';

const rename = async () => {
    const sourcePath = join('files', 'wrongFilename.txt');
    const destPath = join('files', 'properFilename.md');

    try {
        await access(sourcePath);
        await access(destPath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') await rename(sourcePath, destPath)
        else throw err;
    }


};

await rename();