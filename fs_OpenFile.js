const fs = require("fs");

fs.open("readFile.txt", "r", (err, fd)=> {
    if (err) {
        return console.error(err);
    }
    console.log(fd);
    console.log("File open successfully");
});
