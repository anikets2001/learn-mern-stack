// Os modules

// importing os module(built in module)
const os = require("os");

console.log(os.userInfo());

// up time of system
console.log(`The system uptime is ${os.uptime()} seconds`);

// getting info about os(operating system)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
