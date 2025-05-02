const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end("<h1>Главная страница</h1>");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    return res.end("about us");
  } else if (req.url === "/api/user") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ name: "Вася", age: 25 }));
  } else if (req.url === "/submit") {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.statusCode = 200;
      return res.end(`
        <form method="POST" action="/submit">
          <input type="text" name="data" placeholder="Введите данные">
          <button type="submit">Отправить</button>
        </form>
      `);
    }

    if (req.method === "POST") {
      let body = [];

      req.on("error", (err) => {
        console.log("Ошибка чтения тела запроса", err);
        res.statusCode = 400; // Bad Request
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("Ошибка при чтении данных запроса");
      });

      req.on("data", (chunk) => {
        body.push(chunk);
        console.log(`Получен чанк размером ${chunk.length}`);
      });

      req.on("end", () => {
        try {
          const fullBody = Buffer.concat(body).toString("utf-8");
          console.log("Полное тело запроса: ", fullBody);
          res.statusCode = 201;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end("Данные получены, ", fullBody);
        } catch (e) {}
      });
    }
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.end("<h1>404 Страница не найдена</h1>");
});

server.listen(3000);
