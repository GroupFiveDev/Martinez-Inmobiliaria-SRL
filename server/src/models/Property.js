const { DataTypes } = require("sequelize");

module.exports = async (sequelize) => {
  sequelize.define("property", {
    type: {
      type: DataTypes.ENUM("field", "apartment"),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    hectares: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.TEXT,
    },
    terrain: {
      type: DataTypes.TEXT,
    },
    rooms: {
      type: DataTypes.INTEGER,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: [],
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
