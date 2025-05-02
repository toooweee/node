const fs = require("fs");

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

fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

getText("./second.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
