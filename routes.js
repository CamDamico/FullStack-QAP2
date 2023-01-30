const fs = require("fs");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

//load the logEvents module
const logEvents = require("./logEvents");

myEmitter.addListener("route", (event, level, msg) => {
  const d = new Date();
  console.log(d.toLocaleString() + " * " + level.toUpperCase() + " * " + msg);
  logEvents(event, level.toUpperCase(), msg);
});

// Index page

function indexPage(path, event, response) {
  displayFile(path, response);
  myEmitter.emit("route", event, "information", "the home page was visited.");
}

// About page

function aboutPage(path, event, response) {
  displayFile(path, response);
  myEmitter.emit("route", event, "information", "the about page was visited.");
}

// Contact page

function contactPage(path, event, response) {
  displayFile(path, response);
  myEmitter.emit(
    "route",
    event,
    "information",
    "the contact page was visited."
  );
}

// Subscribe page

function subscribePage(path, event, response) {
  displayFile(path, response);
  myEmitter.emit(
    "route",
    event,
    "information",
    "the subscribe page was visited."
  );
}

// Products page

function productsPage(path, event, response) {
  displayFile(path, response);
  myEmitter.emit(
    "route",
    event,
    "information",
    "the products page was visited."
  );
}

// SpiderMonkey page

function spiderMonkeyPage(path, event, response) {
  displayFile(path, response);
  myEmitter.emit(
    "route",
    event,
    "information",
    "the SpiderMonkey page was visited."
  );
}

// 404 page

function fourOffourPage(path, event, response) {
  displayFile(path, response);
  myEmitter.emit(
    "route",
    event,
    "error",
    "a routing error occured for the " + event + "route."
  );
}

function displayFile(path, response) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}

module.exports = {
  indexPage,
  aboutPage,
  contactPage,
  subscribePage,
  fourOffourPage,
  productsPage,
  spiderMonkeyPage,
};
