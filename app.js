const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;      //destructure url from req object
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("homepage");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("about page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`<h1>Page not found!</h1>`);
  }
});

server.listen(5000, () => {
  console.log("starting server..");
});
