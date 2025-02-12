const fs = require('fs/promises');

async function fsPromise() {
  try {
    const data = "Some data!";
    await fs.writeFile('/Users/joe/test.txt', data);
  } catch (err) {
    console.log(err);
  }
}

fsPromise();