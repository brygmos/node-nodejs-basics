const rename = async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const sourcePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(sourcePath);
        await fs.access(destPath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') await fs.rename(sourcePath, destPath)
        else throw err;
    }


};

// await rename();

await rename();