const path = require('path');

console.log(__dirname)
console.log(__filename);;

console.log(path.basename('C:\\temp\\myfile.html'));          // 'C:\temp\myfile.html' 
console.log(path.extname('index.html'));        //.html
console.log(path.extname(__filename));          //.js
console.log(path.isAbsolute(__filename));       //true
console.log(path.parse(__filename));

