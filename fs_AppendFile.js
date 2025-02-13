const fs = require('fs');

console.log("\nBefore append :",
    fs.readFileSync("example.txt", "utf8"));

fs.appendFile("example.txt", " Yashil Busa", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("\nAfter append :",
        fs.readFileSync("example.txt", "utf8"));
    }
}); 
