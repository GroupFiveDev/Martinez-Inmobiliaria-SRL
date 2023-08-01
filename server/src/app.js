const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const path = require("path");

require("./db.js").default;

const server = express();
const cors = require("cors");

server.name = "API";

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
// Config cache
server.use(
  express.static(path.join(__dirname, "public"), {
    setHeaders: (res, path) => {
      if (
        path.endsWith(".html") ||
        path.endsWith(".css") ||
        path.endsWith(".js") ||
        path.endsWith(".webp") ||
        path.endsWith(".mp4") ||
        path.endsWith(".jpg") ||
        path.endsWith(".png")
      ) {
        res.setHeader("Cache-Control", "public, max-age=2592000");
      }
    },
  })
);

server.use("/", routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
