const axios = require('axios');
const { Dog, Temperament } = require('../db');

// Función para obtener los detalles de una raza específica
const getDogByIdRaza = async (idRaza, source) => {
    try {
        let dogDetails;

        if (source === 'api') {
            // Si la fuente es la API, buscar en la API directamente
            const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`);
            const apiDog = response.data;
            
            const temperaments = apiDog.temperament.split(',').map(t => t.trim());

            dogDetails = {
                id: apiDog.id,
                name: apiDog.name,
                bred_for: apiDog.bred_for,
                breed_group: apiDog.breed_group,
                life_span: apiDog.life_span,
                temperaments: temperaments,
                // Otros detalles...
            };
        } else {
            // Si la fuente es la base de datos, buscar en la base de datos
            const dbDog = await Dog.findOne({
                where: { ID: idRaza },
                include: Temperament,
            });

            if (dbDog) {
                dogDetails = dbDog.toJSON();
            } else {
                throw new Error('Raza no encontrada en la base de datos');
            }
        }

        return dogDetails;
    } catch (error) {
        console.error('Error al obtener los detalles de la raza:', error);
        throw error;
    }
};

module.exports = {
    getDogByIdRaza,
};
