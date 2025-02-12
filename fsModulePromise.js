const fs = require('fs/promises');

async function fsPromise() {
  try {
    const data = "Some data of WriteFile Using Async/Await";
    await fs.writeFile('WriteFilePromise.txt', data);
  } catch (err) {
    console.log(err);
  }
}
console.log("File Writing Successfully");

fsPromise();
