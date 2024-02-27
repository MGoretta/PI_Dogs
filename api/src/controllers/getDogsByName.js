const axios = require('axios');
const { Dog } = require('../db');
const { Op } = require('sequelize');
const { clean } = require ("./getAllDogs")
const { API_KEY } = process.env;

const getDogsByName = async (name) => {

    const infoAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`).data);

 const dogsAPI = clean(infoAPI);

 const dogFiltered = dogsAPI.filter(dog=>dog.name=name);

 const dogBBDD = await Dog.findAll({where: {name: name}});

 return [...dogFiltered, ...dogBBDD];
};

// const getDogsByName = async (name) => {
//     try {
//         // Buscar perros por nombre en la base de datos
//         let dogsFromDB = await Dog.findAll({
//             where: {
//                 name: {
//                     [Op.iLike]: `%${name}%` // Buscar coincidencias parciales, sin importar mayúsculas o minúsculas
//                 }
//             }
//         });

//         // Si no se encontraron resultados en la base de datos, buscar en la API externa
//         if (dogsFromDB.length === 0) {
//             const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key={API_KEY}`);
//             dogsFromDB = response.data;

//             dogsFromDB = dogsFromAPI.filter((el) => 
//             el.name.toLowerCase().includes(req.query.name.toLowerCase()))
//         }

//         return dogsFromDB;
//     } catch (error) {
//         console.error('Error al buscar perros por nombre:', error);
//         throw error;
//     }
// };

module.exports = getDogsByName;