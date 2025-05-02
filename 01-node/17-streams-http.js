const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const pathToFile = path.join(__dirname, "..", "00-other", "input.txt");
  const readFileStream = fs.createReadStream(pathToFile);

  readFileStream.on("data", (chunk) => {
    console.log(chunk.toString());
    res.end(chunk.toString());
  });
});

server.listen(5000);
