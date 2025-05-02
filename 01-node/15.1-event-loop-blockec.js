const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Homepage");
  }

  if (req.url === "/about") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}: ${j}`);
      }
    }

    return res.end("about");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening at http://localhost:3000");
});
