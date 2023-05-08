const { Apartment } = require("../db.js");

//ambiente de desarrollo
async function createApartments() {
  const fields = [
    {
      type: "apartment",
      title: "Departamento La Pampa",
      description: "Amplio y moderno",
      rooms: 5,
      location: "Ruta Nacional 5, Santa Rosa, La Pampa",
      bathrooms: 2,
      price: 1000000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "apartment",
      title: "Departament El Dorado",
      description: "Moderno y confortable",
      rooms: 2,
      location: "Ruta Provincial 17, Eldorado, Misiones",
      bathrooms: 1,
      price: 500000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "apartment",
      title: "Departamento El Calafate",
      description: "Monoambiente confortable",
      rooms: 1,
      location: "Ruta Provincial 15, El Calafate, Santa Cruz",
      bathrooms: 1,
      price: 500000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "apartment",
      title: "Departamento Las Pampas",
      description: "Amplio y moderno",
      rooms: 4,
      location: "Ruta Nacional 5, Junín, Buenos Aires",
      bathrooms: 2,
      price: 1200000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "apartment",
      title: "Departamento Cuyo",
      description: "Moderno",
      rooms: 3,
      location: "Ruta Nacional 40, San Juan, San Juan",
      bathrooms: 2,
      price: 800000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "apartment",
      title: "Departamento Patagonia",
      description: "Moderno, amplio y confortable",
      rooms: 5,
      location: "Ruta Provincial 25, Esquel, Chubut",
      bathrooms: 2,
      price: 2000000,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    },
    {
      type: "apartment",
      title: "Departamento del Sol",
      description: "Amplio y con balcón",
      rooms: 3,
      location: "Ruta Nacional 7, Luján de Cuyo, Mendoza",
      bathrooms: "Mixto",
      price: 1,
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

//************

async function getApartments() {
  try {
    const apartments = await Apartment.findAll();
    return apartments;
  } catch (error) {
    return error;
  }
}

async function getApartmentById(id) {
  try {
    const apartment = await Apartment.findOne({
      where: { id },
    });
    return apartment;
  } catch (error) {
    return error;
  }
}

async function editApartment(id, data) {
  try {
    const apartment = await Apartment.findOne({
      where: { id },
    });
    if (data.title) apartment.title = data.title;
    if (data.description) apartment.description = data.description;
    if (data.rooms) apartment.rooms = data.rooms;
    if (data.location) apartment.location = data.location;
    if (data.bathrooms) apartment.bathrooms = data.bathrooms;
    if (data.price) apartment.price = data.price;
    if (data.images) apartment.images = data.images;
    if (data.archived !== null) apartment.archived = data.archived;
    if (data.sold !== null) apartment.sold = data.sold;
  } catch (error) {
    return error;
  }
}

async function deleteApartment(id) {
  try {
    const deleted = await Apartment.destroy({
      where: { id },
    });

    return deleted === 1 ? "Apartment deleted." : "Error";
  } catch (error) {
    return error;
  }
}

async function createApartment(
  title,
  description,
  rooms,
  location,
  bathrooms,
  price,
  images
) {
  try {
    await Apartment.create({
      title,
      description,
      rooms,
      location,
      bathrooms,
      price,
      images,
    });
  } catch (error) {
    return error;
  }
}

module.exports = {
  getApartments,
  getApartmentById,
  editApartment,
  deleteApartment,
  createApartment,
  createApartments,
};
