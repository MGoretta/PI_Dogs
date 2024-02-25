const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('dog', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height_min:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    height_max:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    weight_min:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    weight_max:{
      type: DataTypes.FLOAT,
      allowNull: false
    },  
    life_span_min: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    life_span_max: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};


// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('dog', {
// //     name: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //   });
// // };

// // const { DataTypes } = require('sequelize');
// // const { v4: uuidv4 } = require('uuid');

// // module.exports = (sequelize) => {
// //   sequelize.define('Dogs', { 
//     ID: {
//       type: DataTypes.UUID,
//       defaultValue: uuidv4,
//       allowNull: false,
//       primaryKey: true,
//     },
//     image: {
//       type: DataTypes.STRING, // Especifica el tipo de datos para la imagen (STRING)
//       allowNull: false // No permitas valores nulos para la imagen
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     height: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     weight: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     life_span: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });
// }
