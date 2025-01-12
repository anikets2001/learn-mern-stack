// const { writeFileSync } = require("fs");
// for (let i = 0; i < 100; i++) {
//   writeFileSync('./content/big.txt', `Hello World ${i}\n`, { flag: "a" });
// }

// read stream from file
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark: 9000, encoding: 'utf8'});
stream.on('data', (result)=> {
    console.log(result)
})
