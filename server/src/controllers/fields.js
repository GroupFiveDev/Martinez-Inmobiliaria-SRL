const { Field } = require("../db.js");

// Solamente para ambiente de desarrollo
async function createFields() {
  const fields = [
    {
      type: "field",
      title: "Campo La Pampa",
      description: "Amplio campo con terreno ganadero",
      hectares: 5000,
      lots: 2,
      location: "Ruta Nacional 5, Santa Rosa, La Pampa",
      terrain: "Ganadero",
      price: 1000000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "field",
      title: "Campo El Dorado",
      description: "Campo con terreno mixto",
      hectares: 2000,
      lots: 3,
      location: "Ruta Provincial 17, Eldorado, Misiones",
      terrain: "Mixto",
      price: 500000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "field",
      title: "Campo El Calafate",
      description: "Campo con terreno mixto",
      hectares: 10000,
      lots: 1,
      location: "Ruta Provincial 15, El Calafate, Santa Cruz",
      terrain: "Mixto",
      price: 1500000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "field",
      title: "Campo Las Pampas",
      description: "Campo con terreno agrícola",
      hectares: 7000,
      lots: 5,
      location: "Ruta Nacional 5, Junín, Buenos Aires",
      terrain: "Agrícola",
      price: 1200000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "field",
      title: "Campo Cuyo",
      description: "Campo con terreno agrícola",
      hectares: 3500,
      lots: 2,
      location: "Ruta Nacional 40, San Juan, San Juan",
      terrain: "Agrícola",
      price: 800000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "field",
      title: "Campo Patagonia",
      description: "Campo con terreno ganadero",
      hectares: 12000,
      lots: 1,
      location: "Ruta Provincial 25, Esquel, Chubut",
      terrain: "Ganadero",
      price: 2000000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "field",
      title: "Campo del Sol",
      description: "Campo con terreno mixto",
      hectares: 3000,
      lots: 4,
      location: "Ruta Nacional 7, Luján de Cuyo, Mendoza",
      terrain: "Mixto",
      price: 700000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
  ];
  try {
    const fieldDB = await Field.findAll();
    if (fieldDB.length) {
      return fieldDB;
    }

    await Field.bulkCreate(fields);
    const fieldDB2 = await Field.findAll();
    return fieldDB2;
  } catch (error) {
    return error;
  }
}
// ************************************

async function deleteField(id) {
  try {
    const deleted = await Field.destroy({
      where: { id },
    });

    return deleted === 1 ? "Field delete." : "Error";
  } catch (error) {
    return error;
  }
}

module.exports = { createFields, deleteField };
