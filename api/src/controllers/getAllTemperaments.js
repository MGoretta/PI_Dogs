const axios = require('axios');
const { Temperament } = require('../db');

const getAllTemperaments = async () => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogsData = response.data;

        console.log('Datos de los perros recibidos de la API:', dogsData);
        
        // Extraer los temperamentos de los datos de los perros
        const temperaments = dogsData.reduce((acc, dog) => {
            if (dog.temperament) {
                const dogTemperaments = dog.temperament.split(',').map(t => t.trim());
                acc.push(...dogTemperaments);
            }
            return acc;
        }, []);

        // Eliminar duplicados y convertir en objetos para su inserción en la base de datos
        const uniqueTemperaments = [...new Set(temperaments)];
        const temperamentObjects = uniqueTemperaments.map(temp => ({ name: temp }));

        // Guardar los temperamentos en la base de datos si no existen
        await Temperament.bulkCreate(temperamentObjects, { ignoreDuplicates: true });

        return uniqueTemperaments;
    } catch (error) {
        console.error('Error al obtener los temperamentos de la API:', error);
        throw error;
    }
};

module.exports = { getAllTemperaments };