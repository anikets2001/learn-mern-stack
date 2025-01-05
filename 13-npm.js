// npm - global command, comes with node
// npm --version

// local dependency -use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm i -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm i -y (everything default)
// npm init (step by step, press enter to skip)
// to install the dev dependencies use a flag -D or --save-dev while installing a dependency
// example of dev dependency
// npm i nodemon -D
// or
// npm i nodemon --save-dev

const _lodash = require("lodash");

const items = [1, [2, [3, [4]]]];
const flatItems = _lodash.flattenDeep(items);
console.log(flatItems);
