const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "test.txt");

const readFileContent = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};

// console.log(readFileContent(filePath));

// add to File

// fs.appendFileSync(filePath, " . And some new data that we added");

// console.log(readFileContent(filePath));

module.exports = filePath;
