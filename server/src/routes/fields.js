const { Router } = require("express");
const router = Router();
const { createFields } = require("../controllers/fields.js");

router.get("/", async (req, res) => {
  try {
    res.json(await createFields());
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
