const { Router } = require("express");
const router = Router();
const {
  deleteApartment,
  getApartments,
  getApartmentById,
  editApartment,
  createApartment,
} = require("../controllers/fields.js");

router.get("/", async (req, res) => {
  try {
    return res.json(await getApartments());
  } catch (error) {
    return res.status(404).json(error);
  }
});

module.exports = router;
