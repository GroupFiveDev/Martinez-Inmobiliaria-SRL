const { Property } = require("../db.js");

// Solamente para ambiente de desarrollo
async function createFields() {
  const properties = [
    {
      type: "field",
      title: "Campo La Pampa",
      description: "Amplio campo con terreno ganadero",
      hectares: 5000,
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
      location: "Ruta Nacional 7, Luján de Cuyo, Mendoza",
      terrain: "Mixto",
      price: 700000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "apartment",
      title: "Hermoso departamento en Palermo",
      description:
        "Departamento moderno y acogedor en el corazón de Palermo Soho",
      location: "Palermo, Buenos Aires",
      price: 120000,
      images: [
        "https://ejemplo.com/img1.jpg",
        "https://ejemplo.com/img2.jpg",
        "https://ejemplo.com/img3.jpg",
      ],
      rooms: 2,
      bathrooms: 1,
    },
    {
      type: "apartment",
      title: "Luminoso departamento en Belgrano",
      description:
        "Departamento con excelente iluminación natural y vistas panorámicas en Belgrano",
      location: "Belgrano, Buenos Aires",
      price: 90000,
      images: [
        "https://ejemplo.com/img4.jpg",
        "https://ejemplo.com/img5.jpg",
        "https://ejemplo.com/img6.jpg",
      ],
      rooms: 3,
      bathrooms: 2,
    },
    {
      type: "apartment",
      title: "Amplio departamento en San Telmo",
      description:
        "Departamento de gran tamaño y ambientes amplios en el barrio histórico de San Telmo",
      location: "San Telmo, Buenos Aires",
      price: 150000,
      images: [
        "https://ejemplo.com/img7.jpg",
        "https://ejemplo.com/img8.jpg",
        "https://ejemplo.com/img9.jpg",
      ],
      rooms: 4,
      bathrooms: 2,
    },
    {
      type: "apartment",
      title: "Departamento con jardín en Nuñez",
      description:
        "Departamento con hermoso jardín privado en el barrio de Nuñez",
      location: "Nuñez, Buenos Aires",
      price: 180000,
      images: [
        "https://ejemplo.com/img10.jpg",
        "https://ejemplo.com/img11.jpg",
        "https://ejemplo.com/img12.jpg",
      ],
      rooms: 2,
      bathrooms: 1,
    },
    {
      type: "apartment",
      title: "Departamento con terraza en Recoleta",
      description:
        "Departamento con amplia terraza y vistas panorámicas en el exclusivo barrio de Recoleta",
      location: "Recoleta, Buenos Aires",
      price: 220000,
      images: [
        "https://ejemplo.com/img13.jpg",
        "https://ejemplo.com/img14.jpg",
        "https://ejemplo.com/img15.jpg",
      ],
      rooms: 3,
      bathrooms: 2,
    },
    {
      type: "apartment",
      title: "Departamento a estrenar en Caballito",
      description:
        "Departamento nuevo a estrenar en el barrio de Caballito, con excelente ubicación y accesibilidad",
      location: "Caballito, Buenos Aires",
      price: 100000,
      images: [
        "https://ejemplo.com/img16.jpg",
        "https://ejemplo.com/img17.jpg",
        "https://ejemplo.com/img18.jpg",
      ],
      rooms: 1,
      bathrooms: 1,
    },
    {
      type: "apartment",
      title: "Departamento en el centro de Córdoba",
      description:
        "Departamento céntrico en la ciudad de Córdoba, con excelente conectividad y cercanía a puntos de interés",
      location: "Centro, Córdoba",
      price: 80000,
      images: [
        "https://ejemplo.com/img19.jpg",
        "https://ejemplo.com/img20.jpg",
        "https://ejemplo.com/img21.jpg",
      ],
      rooms: 2,
      bathrooms: 1,
    },
  ];
  try {
    const propertiesDB = await Property.findAll();
    if (propertiesDB.length) {
      return propertiesDB;
    }

    await Property.bulkCreate(properties);
    const propertiesDB2 = await Property.findAll();
    return propertiesDB2;
  } catch (error) {
    return error;
  }
}
// ************************************

async function getFields() {
  try {
    const fields = await Field.findlAll();
    return fields;
  } catch (error) {
    return error;
  }
}

async function deleteField(id) {
  try {
    const deleted = await Field.destroy({
      where: { id },
    });

    return deleted === 1 ? "Field deleted." : "Error";
  } catch (error) {
    return error;
  }
}

async function createField(
  title,
  description,
  hectares,
  location,
  terrain,
  price,
  images
) {
  try {
    await Field.create({
      title,
      description,
      hectares,
      location,
      terrain,
      price,
      images,
    });
  } catch (error) {
    return error;
  }
}

async function getFieldById(id) {
  try {
    const field = await Field.findOne({
      where: { id },
    });
    return field;
  } catch (error) {
    return error;
  }
}

async function editField(id, data) {
  try {
    const field = await Field.findOne({
      where: { id },
    });

    if (data.title) field.title = data.title;
    if (data.description) field.description = data.description;
    if (data.hectares) field.hectares = data.hectares;
    if (data.location) field.location = data.location;
    if (data.terrain) field.terrain = data.terrain;
    if (data.price) field.price = data.price;
    if (data.images) field.images = data.images;
    if (data.archived !== null) field.archived = data.archived;
    if (data.sold !== null) field.sold = data.sold;

    await field.save();
    await field.reload();

    return field;
  } catch (error) {
    return error;
  }
}

module.exports = {
  createFields,
  deleteField,
  getFieldById,
  editField,
  createField,
};
