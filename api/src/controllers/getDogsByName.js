const axios = require('axios');
const { Dog } = require('../db');
const { Op } = require('sequelize');

const getDogByName = async (name) => {
    try {
        // Buscar perros por nombre en la base de datos
        const dogsFromDB = await Dog.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%` // Buscar coincidencias parciales, sin importar mayúsculas o minúsculas
                }
            }
        });

        // Buscar perros por nombre en la API externa
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        const dogsFromAPI = response.data;

        // Combinar los resultados de la base de datos y de la API externa
        const combinedResults = [...dogsFromDB, ...dogsFromAPI];

        return combinedResults;
    } catch (error) {
        console.error('Error al buscar perros por nombre:', error);
        throw error;
    }
};

module.exports = getDogByName;