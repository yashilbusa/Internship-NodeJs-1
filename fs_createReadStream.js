const fs = require('fs');

const read = fs.createReadStream('largFile.txt');

read.on('data',(data)=>{
    console.log(data.toString());
})