// importing path module(built-in module)
const path = require('path')
console.log(path.sep)

// getting relative path to a file
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)


// getting base path of that file(name)
const base = path.basename(filePath)
console.log(base);

// getting absolute path of the file
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt');
console.log(absolute);