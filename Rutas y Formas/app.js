const http = require("http");
const fs = require("fs");

fs.readFile("./index.html", (err, html) => {
  if (err) {
    throw err;
  }
  http
    .createServer((request, response) => {
      if (request.url === "/") {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
      } else if (request.url === "/Michi") {
        fs.readFile("./Michi.html", (err, Michihtml) => {
          response.writeHeader(200, { "Content-Type": "text/html" });
          response.write(Michihtml);
          response.end();
        });
      } else if (request.url === "/Datos") {
        fs.readFile("./Datos.html", (err, Datoshtml) => {
          response.writeHeader(200, { "Content-Type": "text/html" });
          response.write(Datoshtml);
          response.end();
        });
      } else {
        response.writeHeader(404);
        response.write("<h1></h1>");
        response.write("Not Found");
        response.end();
      }
    })
    .listen(3000);
});
