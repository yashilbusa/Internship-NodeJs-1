const fs = require('fs'); 

const writer = fs.createWriteStream('test_gfg.txt') 

writer.write('GeeksforGeeks');