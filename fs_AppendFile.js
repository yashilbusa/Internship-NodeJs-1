const fs = require('fs');

console.log("\nFile Contents of file before append :",
    fs.readFileSync("example.txt", "utf8"));

fs.appendFile("example.txt", "Yashil Busa", (err) => {
    if (err) {
        console.log(err);
    }
    else {

        console.log("\nFile Contents of file after append :",
        fs.readFileSync("example.txt", "utf8"));
    }
}); 
