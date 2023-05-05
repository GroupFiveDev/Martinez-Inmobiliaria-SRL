const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "apartment",

    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.TEXT,
        defaultValue: "apartment",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      location: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      rooms: {
        type: DataTypes.INTEGER,
      },
      bathrooms: {
        type: DataTypes.INTEGER,
      },
      archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
