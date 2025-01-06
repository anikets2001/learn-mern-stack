// const { readFile, writeFile } = require("fs");
const { readFile, writeFile } = require("fs").promises;

// approach 1: writing our own custom function to read/write files
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// approach 2: using promisify util from utility module
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// using .then/.catch
// getText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// using async/await
// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");

//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// approach 2: using promisify
// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     await writeFilePromise("./content/result-two.txt", "this is awesome");

//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// approach 3: we can also omit below lines and import using .promise
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    // await writeFilePromise("./content/result-two.txt", "this is awesome");

    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
