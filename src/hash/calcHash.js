import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {createHash} from 'crypto';

const calculateHash = async () => {

    const filePath = join('files', 'fileToCalculateHashFor.txt')
    const fileData = readFile(filePath);

    const hash = createHash('sha256').update(await fileData).digest('hex');

    console.log(`SHA-256 hash of ${filePath}: ${hash}`);
};

await calculateHash()