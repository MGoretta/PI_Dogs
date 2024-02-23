const axios = require('axios');

const getAllDogs = async () => {
  try {
    // Realizar una solicitud GET a la API de perros
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    
    // Obtener los datos de los perros de la respuesta
    const dogsData = response.data;
    
    // Mapear los datos de los perros para obtener un arreglo de objetos con solo la propiedad 'name'
    const dogName = dogsData.map(dog => ({ name: dog.name }));
    
    return dogName;
  } catch (error) {
    console.error('Error al obtener las razas de los perros:', error);
    throw error;
  }
};

module.exports = {
  getAllDogs
};