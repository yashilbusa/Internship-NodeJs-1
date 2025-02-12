const fs = require('fs');

// Example of Non-Blocking IO Model
// It will read file but it will also not blocking remaing code so it will print first 
// the console then print file data

fs.readFile('readFile.txt' , 'utf8' , (err,data)=>{
    console.log(data);      //This is File.Txt File
    console.log(err);       //null
})
console.log("Finishing Reading File"); 



console.log();
//Write File
const value = "This is WriteFile.txt file Content";
fs.writeFile("writeFile.txt", value, (err,data)=>{
    console.log(value);     //This is WriteFile.Txt file Content
    console.log(err);       //null
})
console.log("File Writing Successfully");



//Order Of Execution
/*

1. console.log("Finishing Reading File"); 
2. console.log();
3. console.log("File Writing Successfully");
4. fs.writeFile {
        console.log(value);     
        console.log(err); 
    }
5. fs.readFile {
    console.log(data);    
    console.log(err); 
    }

*/
