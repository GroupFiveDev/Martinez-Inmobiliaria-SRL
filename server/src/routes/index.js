const { Router } = require("express");
const properties = require("./properties.js");

const router = Router();

router.use("/properties", properties);

module.exports = router;
