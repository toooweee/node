const fs = require("fs");
const util = require("util");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
};

const readFilePromise = util.promisify(getText);

fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

readFilePromise("./second.txt").then((dat) => console.log(dat));
