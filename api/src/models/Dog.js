const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  sequelize.define('Dog', { // Cambiado el nombre del modelo a Dog
    ID: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING, // Especifica el tipo de datos para la imagen (STRING)
      allowNull: false // No permitas valores nulos para la imagen
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
