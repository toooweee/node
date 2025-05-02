const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");

const readableStream = fs.createReadStream(inputFilePath, { encoding: "utf8" });

readableStream.on("data", (chunk) => {
  console.log("Received a chunk of data: ", chunk);
});

readableStream.on("end", () => {
  console.log("Finished reading the file");
});

readableStream.on("error", (err) => {
  console.log(err.stack);
});
