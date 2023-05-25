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
//importaciones de cloudinary
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;

// Configuración de Cloudinary
// cloudinary.config({
//   cloud_name: "dgei1j8pa",
//   api_key: "836764965398888",
//   api_secret: "Q7RhBWkAn1zlokzz7Emf4IMHNdw",
// });

// Configuración de multer para subir archivos
// const upload = multer({ dest: "uploads/" });

// Ruta para crear un nuevo Property con imágenes
// router.post('/properties', upload.array('images'), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const images = [];

//     // Subir imágenes a Cloudinary
//     const uploadPromises = req.files.map((file) =>
//       cloudinary.uploader.upload(file.path)
//     );
//     const results = await Promise.all(uploadPromises);

//     // Crear un nuevo Property en la base de datos
//     const property = await Property.create({
//       title,
//       description,
//     });

// Crear registros de imágenes en la base de datos y asociarlos al Property
// for (let i = 0; i < results.length; i++) {
//   const result = results[i];
//   const image = await Image.create({
//     url: result.secure_url,
//     PropertyId: property.id,
//   });
//   images.push(image);
// }

//Hay que modificar algunas cosas de lo de cloudinary, aún no funciona

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
      garage,
      position,
      square,
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
        garage,
        square,
        images,
        type,
        position
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
