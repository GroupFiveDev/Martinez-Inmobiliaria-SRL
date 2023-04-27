const { Router } = require("express");
const fields = require("./fields.js");

const router = Router();

router.use("/fields", fields);

module.exports = router;
