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

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await editApartment(id, req.body));
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await deleteApartment(id));
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, rooms, location, bathrooms, price, images } =
      req.body;
    return res.json(
      await createApartment(
        title,
        description,
        rooms,
        location,
        bathrooms,
        price,
        images
      )
    );
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
