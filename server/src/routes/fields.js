const { Router } = require("express");
const router = Router();
const {
  createFields,
  deleteField,
  getFieldById,
} = require("../controllers/fields.js");

router.get("/", async (req, res) => {
  try {
    return res.json(await createFields());
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await getFieldById(id));
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await deleteField(id));
  } catch (error) {
    return res.status(404).json(error);
  }
});

module.exports = router;
