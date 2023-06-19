const decompress = async () => {
    const fs = require('fs');
    const zlib = require('zlib');

    const filePath = './files/fileToCompress.txt';

    const readStream = fs.createReadStream('./files/archive.gz');

    const writeStream = fs.createWriteStream(filePath);

    const gunzipStream = zlib.createGunzip();

    readStream.pipe(gunzipStream).pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await decompress();