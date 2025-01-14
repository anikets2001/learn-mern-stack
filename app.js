const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("homepage");
  } else if (req.url === "/about") {
    res.end("about page");
  } else {
    res.end(`<h1>Error page</h1>`);
  }
});

server.listen(5000, ()=> {
    console.log('starting server....')
})
