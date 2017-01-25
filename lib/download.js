const fs       = require('fs');
const path     = require('path');
const request  = require('request');
const uri      = process.argv[2];
const filename = require('.').randomString();

let file  = fs.createWriteStream(path.resolve(__dirname, filename));
let bytes = 0;

let response = (success, message) => {
    process.stdout.write(JSON.stringify({
        success: success,
        message: message,
        length:  bytes,
    }));

    process.exit(0);
}

let stream = request
    .get(uri)
    .on('error', (err) => {
        response(false, err);
    })
    .on('data', (chunk) => {
        bytes += chunk.length;
    })
    .pipe(file);

stream.on('finish', () => response(true, filename));