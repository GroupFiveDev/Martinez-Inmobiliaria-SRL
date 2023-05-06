const { Apartment } = require("../db.js");

async function getApartments() {
  try {
    const apartments = await Apartment.findAll();
    return apartments;
  } catch (error) {
    return error;
  }
}
