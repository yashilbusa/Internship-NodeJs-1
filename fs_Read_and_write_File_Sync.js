// Without Non Blocking IO Model we use readfileSync
const data = fs.readFileSync('file.txt');
console.log(data.toString());
console.log("Finishing Reading File"); 



//Write FileSync
const value2 = "This is Data2.txt file Content"
const b = fs.writeFileSync("data2.txt", value2);
console.log(b);
console.log("File Writing Successfully");
