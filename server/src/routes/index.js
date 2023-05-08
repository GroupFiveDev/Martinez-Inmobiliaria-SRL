const { Router } = require("express");
const fields = require("./fields.js");
const apartments = require("./apartments.js");

const router = Router();

router.use("/fields", fields);
router.use("/apartments", apartments);

module.exports = router;
