const { Router } = require("express");
const router = Router();
const {
  createProperties,
  deleteProperty,
  getPropertyById,
  editProperty,
  createProperty,
  orderAndFilterProperties,
  // getProperties,
} = require("../controllers/properties.js");
const multer = require("multer");
const path = require("path");

router.get("/", async (req, res) => {
  try {
    return res.json(await createProperties());
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.get("/orderAndFilter/:value", async (req, res) => {
  try {
    const { value } = req.params;
    return res.json(await orderAndFilterProperties(JSON.parse(value)));
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

const diskStorage = multer.diskStorage({
  destination: path.join(__dirname, "../../upload"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// const fileUpload = multer({
//   storage: diskStorage,
// }).single("image");

const fileUpload = multer({
  storage: diskStorage,
}).array("images", 10);

router.post("/", fileUpload, async (req, res) => {
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
      garage,
      position,
      square,
      images,
      type,
    } = req.body;
    console.log("el file: ", req.file);
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
        garage,
        square,
        images,
        type,
        position,
        req.file
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
