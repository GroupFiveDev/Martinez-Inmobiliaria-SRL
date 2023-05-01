const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(
      `Server listening at ${process.env.PORT} DBNAME: ${conn.config.database}`
    );
  });
});