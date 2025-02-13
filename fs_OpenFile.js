const fs = require("fs");

fs.open("example.txt", "a",(err, fd)=> {
    if (err) {
        console.error(err);
    }
    console.log(fd);
    console.log("File open successfully");
});
