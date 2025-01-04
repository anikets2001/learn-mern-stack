// fs module(built-in)
// two ways of accessing fs-module
// i. synchronously(blocking) ii.asynchronously(non-blocking)

// async method
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(`${err} from second`);
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `This is async text file with ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
