// modules
// CommonJS, every file is a module (default)
// Modules - Encapsulated Code(only share minimum)

const { john, peter } = require("./4-names"); //destructure names from names obj
const sayHi = require("./5-utils"); //require sayHi function from utils file
const data = require("./6-alternative-flavour");
require('./7-mind-grenade')

// sayHi(john);
// sayHi(peter);
