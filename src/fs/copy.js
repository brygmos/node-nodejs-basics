import {access, copyFile, mkdir, readdir,} from 'node:fs/promises';
import {join} from 'node:path';

const copy = async () => {
    const sourcePath = join('files');
    const destPath = join('files_copy');

    try {
        await access(sourcePath);
        await access(destPath);
        throw new Error('FS operation failed: Destination directory already exists.');
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }

    await mkdir(destPath);

    const files = await readdir(sourcePath);

    for (let file of files) {
        const srcFile = join(sourcePath, file);
        const destFile = join(destPath, file);
        await copyFile(srcFile, destFile);
    }
};

await copy();
