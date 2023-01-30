// HTTP server

const http = require("http");

// routes.js is it's own file
const routes = require("./routes.js");

const server = http.createServer((request, response) => {
  let path = "./views/";

  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      routes.indexPage(path, request.url, response);
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      routes.aboutPage(path, request.url, response);
      break;
    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      routes.contactPage(path, request.url, response);
      break;
    case "/subscribe":
      path += "subscribe.html";
      response.statusCode = 200;
      routes.subscribePage(path, request.url, response);
      break;
    case "/products":
      path += "products.html";
      response.statusCode = 200;
      routes.productsPage(path, request.url, response);
      break;
    case "/spiderMonkey":
      path += "spiderMonkey.html";
      response.statusCode = 200;
      routes.spiderMonkeyPage(path, request.url, response);
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      routes.fourOffourPage(path, request.url, response);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});
