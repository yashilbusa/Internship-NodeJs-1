const fs = require('fs');

// Without Non Blocking IO Model we use readfileSync
// file.txt : This is File.Txt File
const data = fs.readFileSync('readFile.txt');
console.log(data.toString());
console.log("Finishing Reading File"); 


console.log();
//Write FileSync
const value = "This is WriteFileSync.txt file Content"
fs.writeFileSync("WriteFileSync.txt", value);
console.log(value);
console.log("File Writing Successfully");
