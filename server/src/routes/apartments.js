const { Router } = require("express");
const router = Router();
const {
  deleteApartment,
  getApartments,
  getApartmentById,
  editApartment,
  createApartment,
} = require("../controllers/apartments.js");

router.get("/", async (req, res) => {
  try {
    return res.json(await getApartments());
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await getApartmentById(id));
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.use("/", async);

module.exports = router;
