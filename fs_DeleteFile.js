const fs = require("fs");

fs.unlink("unlink.txt", (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted");
});