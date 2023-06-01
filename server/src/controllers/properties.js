const { Property } = require("../db.js");
const { uploadImage } = require("../cloudinary.js");
const fs = require("fs-extra");

// Solamente para ambiente de desarrollo
async function createProperties() {
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
        "https://www.shutterstock.com/image-photo/cows-grazing-sunset-patagonia-argentina-260nw-1717013122.jpg",
        "https://i.pinimg.com/736x/0d/83/f4/0d83f4474c77d94966d16c8eccf6c92d--white-cottage-argentina.jpg",
        "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/SBEJYXLPVRCNTGO4UMGT4ZGLYU.jpg",
        "https://www.shutterstock.com/image-photo/cows-grazing-sunset-patagonia-argentina-260nw-1717013122.jpg",
      ],
      position: {
        lat: -34.583436,
        lng: -58.406165,
      },
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
      position: {
        lat: -32.957218,
        lng: -60.635688,
      },
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
      position: {
        lat: -31.417043,
        lng: -64.183998,
      },
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
      position: {
        lat: -27.450578,
        lng: -58.986316,
      },
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
      position: {
        lat: -34.613128,
        lng: -58.377232,
      },
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
      position: {
        lat: -32.890183,
        lng: -68.84405,
      },
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
      position: {
        lat: -38.949595,
        lng: -68.062176,
      },
    },
    {
      type: "apartment",
      title: "Hermoso departamento en Palermo",
      description:
        "Departamento moderno y acogedor en el corazón de Palermo Soho",
      location: "Palermo, Buenos Aires",
      square: 32,
      garage: 2,
      price: 120000,
      images: [
        "https://ejemplo.com/img1.jpg",
        "https://ejemplo.com/img2.jpg",
        "https://ejemplo.com/img3.jpg",
      ],
      rooms: 2,
      bathrooms: 1,
      position: {
        lat: -26.816797,
        lng: -65.217553,
      },
    },
    {
      type: "apartment",
      title: "Luminoso departamento en Belgrano",
      description:
        "Departamento con excelente iluminación natural y vistas panorámicas en Belgrano",
      location: "Belgrano, Buenos Aires",
      square: 32,
      price: 90000,
      images: [
        "https://ejemplo.com/img4.jpg",
        "https://ejemplo.com/img5.jpg",
        "https://ejemplo.com/img6.jpg",
      ],
      rooms: 3,
      bathrooms: 2,
      position: {
        lat: -29.417875,
        lng: -66.85552,
      },
    },
    {
      type: "apartment",
      title: "Amplio departamento en San Telmo",
      description:
        "Departamento de gran tamaño y ambientes amplios en el barrio histórico de San Telmo",
      location: "San Telmo, Buenos Aires",
      square: 32,
      garage: 2,
      price: 150000,
      images: [
        "https://ejemplo.com/img7.jpg",
        "https://ejemplo.com/img8.jpg",
        "https://ejemplo.com/img9.jpg",
      ],
      rooms: 4,
      bathrooms: 2,
      position: {
        lat: -41.648067,
        lng: -71.615947,
      },
    },
    {
      type: "apartment",
      title: "Departamento con jardín en Nuñez",
      description:
        "Departamento con hermoso jardín privado en el barrio de Nuñez",
      location: "Nuñez, Buenos Aires",
      square: 32,
      garage: 2,
      price: 180000,
      images: [
        "https://ejemplo.com/img10.jpg",
        "https://ejemplo.com/img11.jpg",
        "https://ejemplo.com/img12.jpg",
      ],
      rooms: 2,
      bathrooms: 1,
      position: {
        lat: -24.783905,
        lng: -65.412155,
      },
    },
    {
      type: "apartment",
      title: "Departamento con terraza en Recoleta",
      description:
        "Departamento con amplia terraza y vistas panorámicas en el exclusivo barrio de Recoleta",
      location: "Recoleta, Buenos Aires",
      square: 32,
      garage: 2,
      price: 220000,
      images: [
        "https://ejemplo.com/img13.jpg",
        "https://ejemplo.com/img14.jpg",
        "https://ejemplo.com/img15.jpg",
      ],
      rooms: 3,
      bathrooms: 2,
      position: {
        lat: -33.44889,
        lng: -70.669265,
      },
    },
    {
      type: "apartment",
      title: "Departamento a estrenar en Caballito",
      description:
        "Departamento nuevo a estrenar en el barrio de Caballito, con excelente ubicación y accesibilidad",
      location: "Caballito, Buenos Aires",
      square: 32,
      garage: 2,
      price: 100000,
      images: [
        "https://ejemplo.com/img16.jpg",
        "https://ejemplo.com/img17.jpg",
        "https://ejemplo.com/img18.jpg",
      ],
      rooms: 1,
      bathrooms: 1,
      position: {
        lat: -38.71959,
        lng: -62.265137,
      },
    },
    {
      type: "apartment",
      title: "Departamento en el centro de Córdoba",
      description:
        "Departamento céntrico en la ciudad de Córdoba, con excelente conectividad y cercanía a puntos de interés",
      location: "Centro, Córdoba",
      square: 32,
      garage: 2,
      price: 80000,
      images: [
        "https://ejemplo.com/img19.jpg",
        "https://ejemplo.com/img20.jpg",
        "https://ejemplo.com/img21.jpg",
      ],
      rooms: 2,
      bathrooms: 1,
      position: {
        lat: -32.410791,
        lng: -63.259812,
      },
    },
  ];
  try {
    let propertiesDB = await Property.findAll({
      order: [["id", "DESC"]],
    });
    if (propertiesDB.length) {
      return propertiesDB;
    }

    return await Property.bulkCreate(properties);
  } catch (error) {
    return error;
  }
}
// ************************************

async function getProperties() {
  try {
    const properties = await Property.findAll({
      order: [["id", "DESC"]],
    });
    return properties;
  } catch (error) {
    return error;
  }
}

async function deleteProperty(id) {
  try {
    const deleted = await Property.destroy({
      where: { id },
    });

    return deleted === 1 ? "Property deleted." : "Error";
  } catch (error) {
    return error;
  }
}

async function createProperty(
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
  type,
  position,
  files
) {
  try {
    if (hectares) hectares = Number(hectares);
    if (rooms) rooms = Number(rooms);
    if (bathrooms) bathrooms = Number(bathrooms);
    if (price) price = Number(price);
    if (garage) garage = Number(garage);
    if (square) square = Number(square);
    if (position)
      position = {
        lat: Number(position.split(",")[0]),
        lng: Number(position.split(",")[1]),
      };

    const property = await Property.create({
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
      position,
      type,
    });

    //Si la propiedad fue creada
    if (property) {
      if (files.length) {
        files.map(async (e, i) => {
          const result = await uploadImage(e.path);
          console.log(i + " :", result);
          property.images = [...property.images, result.secure_url];
          property.image_public_id = [
            ...property.image_public_id,
            result.public_id,
          ];
          fs.unlink(e.path);
          await property.save();
        });
      }
    }
    return property;
  } catch (error) {
    return error;
  }
}

async function getPropertyById(id) {
  try {
    const property = await Property.findOne({
      where: { id },
    });
    return property;
  } catch (error) {
    return error;
  }
}

async function editProperty(id, data) {
  try {
    const property = await Property.findOne({
      where: { id },
    });

    if (data.title) property.title = data.title;
    if (data.description) property.description = data.description;
    if (data.hectares) property.hectares = Number(data.hectares);
    if (data.location) property.location = data.location;
    if (data.terrain) property.terrain = data.terrain;
    if (data.rooms) property.rooms = Number(data.rooms);
    if (data.bathrooms) property.bathrooms = Number(data.bathrooms);
    if (data.garage) property.garage = Number(data.garage);
    if (data.square) property.square = Number(data.square);
    if (data.price) property.price = Number(data.price);
    if (data.images) property.images = data.images;
    if (data.archived !== null) property.archived = data.archived;
    if (data.sold !== null) property.sold = data.sold;

    if (data.position) {
      const arr = data.position.split(",");
      property.position = { lat: Number(arr[0]), lng: Number(arr[1]) };
    }

    await property.save();
    await property.reload();

    return property;
  } catch (error) {
    return error;
  }
}

async function orderAndFilterProperties(obj) {
  try {
    !obj.order && (obj.order = [["id", "DESC"]]);
    return await Property.findAll(obj);
  } catch (error) {
    return error;
  }
}

module.exports = {
  createProperties,
  deleteProperty,
  getPropertyById,
  editProperty,
  createProperty,
  orderAndFilterProperties,
};
