const list = async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const filesDirPath = path.join(__dirname, 'files');

    try {
        await fs.access(filesDirPath);
    } catch (err) {
        throw err.code === 'ENOENT' ? new Error('FS operation failed: Directory does not exist.') : err;
    }

    const fileNames = await fs.readdir(filesDirPath);

    console.log(fileNames);
};

await list();