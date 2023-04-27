const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "field",

    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.TEXT,
        defaultValue: "field",
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
      lots: {
        type: DataTypes.INTEGER,
      },
      location: {
        type: DataTypes.TEXT,
      },
      terrain: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
    },
    { timestamps: false }
  );
};
