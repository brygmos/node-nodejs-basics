const calculateHash = async () => {
    const crypto = require('crypto');
    const fs = require('fs').promises;

    const filePath = './files/fileToCalculateHashFor.txt';
    const fileData = fs.readFile(filePath);

    const hash = crypto.createHash('sha256').update(await fileData).digest('hex');

    console.log(`SHA-256 hash of ${filePath}: ${hash}`);
};

(async () => {await calculateHash()})()