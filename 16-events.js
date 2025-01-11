const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on - for handling the event
customEmitter.on("response", (name, age) => {
  console.log(`response received ${name}, ${age}`);
});

customEmitter.on("response", () => {
  console.log("some other logic");
});

// to fire/emit the event
customEmitter.emit("response", "aniket", 24);

// note: the emit will always come below the on (order matters)
