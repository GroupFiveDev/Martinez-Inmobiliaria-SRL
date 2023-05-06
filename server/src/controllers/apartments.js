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

module.exports = { getApartments, getApartmentById };
