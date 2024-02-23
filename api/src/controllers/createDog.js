const axios = require('axios');
const { Dog, Temperament } = require('../db');

const createDog = async (dogName) => {
    try {
        // Obtener datos del perro de la API externa por su nombre
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dogName}`);
        const dogData = response.data[0]; // Tomamos el primer resultado en caso de que haya varios perros con el mismo nombre

        if (!dogData) {
            throw new Error(`No se encontró ningún perro con el nombre '${dogName}'.`);
        }

        // Extraer los temperamentos del objeto de datos del perro
        const temperamentArray = dogData.temperament.split(',').map(temp => temp.trim());

        // Crear el perro con los datos proporcionados y los temperamentos de la API
        const createdDog = await Dog.create({ 
            image: dogData.image.url, // Supongamos que la URL de la imagen está en el campo 'url'
            name: dogData.name, 
            height: dogData.height.metric, // Supongamos que la altura está en el campo 'metric'
            weight: dogData.weight.metric, // Supongamos que el peso está en el campo 'metric'
            life_span: dogData.life_span 
        });

        // Buscar o crear los temperamentos asociados
        const temperamentModels = await Promise.all(temperamentArray.map(tempName => {
            return Temperament.findOrCreate({
                where: { name: tempName }
            });
        }));

        // Relacionar los temperamentos con el perro
        await createdDog.setTemperaments(temperamentModels.map(([tempModel]) => tempModel));

        return createdDog;
    } catch (error) {
        console.error("Error al crear el perro:", error);
        throw error;
    }
};

module.exports = createDog;

