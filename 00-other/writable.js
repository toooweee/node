const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

const readableStream = fs.createReadStream(inputFilePath, { encoding: "utf8" });
const writableStream = fs.createWriteStream(outputFilePath);

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
  console.log("Data has been written");
});
