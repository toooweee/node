const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to the homepage");
  }

  if (req.url === "/about") {
    return res.end("Welcome to the ABOUT page");
  }

  return res.end(`
    <h1>Page not found</h1>
  `);
});

server.listen(3000);
