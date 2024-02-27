const { Dog } = require ("../db")
const { API_KEY } = process.env;
const axios = require('axios');

const clean = (arr) => {
  return arr.map((dog)=>{
  return {
    name: dog.name,
    image: dog.reference_image_id,
    height: dog.height,
    weight: dog.height,
    life_span: dog.life_span,
    temperament: dog.temperament,
    created: false,
  };
});
 };

const getAllDogs = async () => {
 const dogsDB = await Dog.findAll();
 const infoAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`).data);

 const dogsAPI = clean(infoAPI);

 return [...dogsDB, ...dogsAPI];
};
    
//     // Obtener los datos de los perros de la respuesta
//     const dogsData = response.data;
    
//     // Mapear los datos de los perros para obtener un arreglo de objetos con solo la propiedad 'name'
//     const dogName = dogsData.map(dog => ({ name: dog.name }));
    
//     return dogName;
//   } catch (error) {
//     console.error('Error al obtener las razas de los perros:', error);
//     throw error;
//   }
// };

module.exports = {
   getAllDogs,
}