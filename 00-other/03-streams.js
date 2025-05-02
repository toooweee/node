// You can create a readable stream using the built-in fs-module
// to read files or using stream.Readable to create custom readable streams

const fs = require("fs");
const path = require("path");

// create a readable stream
const readableStream = fs.createReadStream(
  path.join(__dirname, "..", "01-node", "second.txt"),
);

readableStream.on("data", (chunk) => {
  console.log("New chunk received: ", chunk);
});

readableStream.on("end", () => {
  console.log("That is all");
});
