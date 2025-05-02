const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  response.end("Hello");
});

server.listen(5000);
