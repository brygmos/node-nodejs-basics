const create = async () => {
    const fs = require('fs/promises');
    const path = require('path');

    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed: File already exists.');
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }
    await fs.writeFile(filePath, 'I am fresh and young');

};

await create();