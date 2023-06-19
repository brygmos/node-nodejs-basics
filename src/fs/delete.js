const remove = async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(filePath);
    } catch (err) {
        throw err.code === 'ENOENT' ? new Error('FS operation failed: File does not exist.') : err;
    }

    await fs.unlink(filePath);
};

await remove();