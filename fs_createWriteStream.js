const fs = require('fs'); 

const writer = fs.createWriteStream('sample.txt') 
writer.write('Hello Yashil From InnovateMR');



// const writer1 = fs.createWriteStream('largeFile.txt');
// const reader = fs.createReadStream('largeFile.txt').pipe(writer1);