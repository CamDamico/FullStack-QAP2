// NPM installed Modules
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// Node.js common core global modules
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (event, level, message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${level}\t${event}\t${message}\t${uuid()}`;

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }

    const fileName = `${format(new Date(), "yyyyMMdd")}` + "_httpevents.log";
    await fsPromises.appendFile(
      path.join(__dirname, "logs, fileName"),
      logItem + "\n"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
