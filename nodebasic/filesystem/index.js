const fs = require('fs');

const fileReadCallback = (err, data) => {
    if(err) {
        console.log(`Gagal membaca berkas`);
        console.log(err);
        return;
    }
    console.log(data);
}

fs.readFile('./filesystem/node.txt', 'UTF-8', fileReadCallback);