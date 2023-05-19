const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
console.log("**", DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, "**");

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(
      `Server listening at ${process.env.PORT} DBNAME: ${conn.config.database}`
    );
    console.log("");
    console.error("Hiciste pull y merge origin/develop antes de codear? :)");
  });
});
