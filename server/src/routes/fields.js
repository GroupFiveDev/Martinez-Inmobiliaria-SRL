const { Router } = require("express");
const router = Router();
const {
  createFields,
  deleteField,
  getFieldById,
} = require("../controllers/fields.js");

router.get("/", async (req, res) => {
  try {
    res.json(await createFields());
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("asdasd");
    res.json(await getFieldById(id));
  } catch (error) {
    res.status(404).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await deleteField(id));
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
