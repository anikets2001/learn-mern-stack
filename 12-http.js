// http built-in module

// importing http module

// (setup)

const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to the home page");
  } else if (request.url === "/about") {
    response.end("Welcome to the about page");
  } else if (request.url === "/contact") {
    response.end("Welcome to the contact us page");
  } else {
    response.end(
      `<h1>OOPS!</h1> 
          <p>We can't seem to find the page you are looking for</p> 
          <a href="/">Homepage</a>`
    );
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
