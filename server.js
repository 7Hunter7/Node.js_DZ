const http = require("http");
let countHome = 0;
let countAbout = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countHome = countHome + 1;
    console.log(`countHome = ${countHome}`);
    res.end(`
    <h1>Главная</h1>
    <a href="/about">Ссылка на вторую страницу</a>
    <h3>Cчетчик просмотров</h3>
    <p>Количество переходов на страницу ${countHome}</p>
    `);
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countAbout = countAbout + 1;
    console.log(`countAbout = ${countAbout}`);
    res.end(`
    <h1>About</h1>
    <a href="/">Ссылка на первую страницу</a>
    <h3>Cчетчик просмотров</h3>
    <p>Количество переходов на страницу ${countAbout}</p>
    `);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(`<h1>Error page</h1>`);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server on port` + port);
});
