const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;
const axios = require('axios');

const clean = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    return []; // O manejar el caso en el que arr no está definido o no es un array
  }

  return arr.map((dog) => {
    return {
      name: dog.name,
      image: dog.reference_image_id,
      height: dog.height,
      weight: dog.weight, 
      life_span: dog.life_span,
      temperament: dog.Temperaments,
      created: false,
    };
  });
};

const getAllDogs = async () => {
  // Obtener perros de la base de datos con temperamentos asociados
  const dogsDB = await Dog.findAll({ include: Temperament
    });

  // Obtener información de la API
  const infoAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;

  // Limpiar los datos de la API
  const dogsAPI = clean(infoAPI);

  // Combinar perros de la base de datos y de la API
  const allDogs = [...dogsDB, ...dogsAPI];

  return allDogs;
};

module.exports = {
  getAllDogs,
  clean,
};
