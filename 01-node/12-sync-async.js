const fs = require("fs");
const filePath = require("./10-fs");

console.log("Start");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

console.log("End");
