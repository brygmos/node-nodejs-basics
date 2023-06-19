const read = async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(filePath);
    } catch (err) {
        throw err.code === 'ENOENT' ? new Error('FS operation failed: File does not exist.') : err;
    }

    const fileContentBuffer = await fs.readFile(filePath);

    console.log(fileContentBuffer.toString());
};

await read()