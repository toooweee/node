const fs = require("fs");

console.log("started a first task");

fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
  console.log("completed first task");
});

console.log("starting new task");
