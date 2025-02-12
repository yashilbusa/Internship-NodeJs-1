const fs = require('fs');


//Example of Non-Blocking IO Model
// It will read file but it will also not blocking remaing code so it will print first 
// the console then print file data

// fs.readFile('file.txt' , 'utf8' , (err,data)=>{
//     console.log(data);
//     console.log(err);
// })
// console.log("Finishing Reading File"); 



// Without Non Blocking IO Model we use readfileSync
const data = fs.readFileSync('file.txt');
console.log(data.toString());
console.log("Finishing Reading File"); 


console.log();
//Write File
// const value = "This is Data.txt file Content";
// fs.writeFile("data.txt", value, (err,data)=>{
//     console.log(value);
//     console.log(err);
// })
// console.log("File Writing Successfully");



//Write FileSync
const value2 = "This is Data2.txt file Content"
const b = fs.writeFileSync("data2.txt", value2);
console.log(b);
console.log("File Writing Successfully");

