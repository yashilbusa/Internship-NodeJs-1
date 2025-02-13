const fs = require('fs');

const read = fs.createReadStream('largeFile.txt');

read.on('data',(chunk)=>{
    console.log(chunk.toString());
})
