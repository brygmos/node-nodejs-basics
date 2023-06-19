const compress = async () => {
    const fs = require('fs');
    const zlib = require('zlib');

    const filePath = './files/fileToCompress.txt';

    const readStream = fs.createReadStream(filePath);

    const writeStream = fs.createWriteStream('./files/archive.gz');

    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await compress();