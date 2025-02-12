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


