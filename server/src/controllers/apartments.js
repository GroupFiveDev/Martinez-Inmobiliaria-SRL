const { Apartment } = require("../db.js");

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

module.exports = {
  getApartments,
  getApartmentById,
  editApartment,
  deleteApartment,
};
