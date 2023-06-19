import {access, unlink} from 'node:fs/promises';
import {join} from 'node:path';

const remove = async () => {

    const filePath = join('files', 'fileToRemove.txt');

    try {
        await access(filePath);
    } catch (err) {
        throw err.code === 'ENOENT' ? new Error('FS operation failed: File does not exist.') : err;
    }

    await unlink(filePath);
};

await remove();