const fs = require("fs");

fs.open("readFile.txt", "r", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data);
    console.log("File open successfully");
});
