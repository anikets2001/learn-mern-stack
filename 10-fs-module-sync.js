// fs module(built-in)
// two ways of accessing fs-module
// i. synchronously(blocking) ii.asynchronously(non-blocking)

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

// overwrite the content of existing file
writeFileSync("./content/first.txt", "My name is Aniket");
console.log(first);

// create a file and write the content in that file
writeFileSync("./content/result.txt", "This is the result");

// in an existing file append the content
writeFileSync("./content/result.txt", " This is appended text", { flag: "a" });
