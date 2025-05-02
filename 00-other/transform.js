const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

const inputFilePath = path.join(__dirname, "input.txt");
const transformFilePath = path.join(__dirname, "outputTransform.txt");

const readableStream = fs.createReadStream(inputFilePath, { encoding: "utf8" });
const writableStream = fs.createWriteStream(transformFilePath);

// Transform data
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

readableStream.pipe(upperCaseTransform).pipe(writableStream);
