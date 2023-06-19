const copy = async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const sourcePath = path.join(__dirname, 'files');
    const destPath = path.join(__dirname, 'files_copy');

    try {
        await fs.access(sourcePath);
        await fs.access(destPath);
        throw new Error('FS operation failed: Destination directory already exists.');
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }

    await fs.mkdir(destPath);

    const files = await fs.readdir(sourcePath);

    for (let file of files) {
        const srcFile = path.join(sourcePath, file);
        const destFile = path.join(destPath, file);
        await fs.copyFile(srcFile, destFile);
    }
};

await copy();
