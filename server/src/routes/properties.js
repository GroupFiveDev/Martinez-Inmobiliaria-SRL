const { Router } = require("express");
const router = Router();
const {
  createProperties,
  deleteProperty,
  getPropertyById,
  editProperty,
  createProperty,
  // getProperties,
} = require("../controllers/properties.js");

router.get("/", async (req, res) => {
  try {
    return res.json(await createProperties());
  } catch (error) {
    return res.status(404).json(error);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     return res.json(await getProperties());
//   } catch (error) {
//     return res.status(404).json(error);
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await getPropertyById(id));
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      hectares,
      location,
      terrain,
      rooms,
      bathrooms,
      price,
      images,
      type,
    } = req.body;
    return res.json(
      await createProperty(
        title,
        description,
        hectares,
        location,
        terrain,
        rooms,
        bathrooms,
        price,
        images,
        type
      )
    );
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await editProperty(id, req.body));
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(await deleteProperty(id));
  } catch (error) {
    return res.status(404).json(error);
  }
});

module.exports = router;
