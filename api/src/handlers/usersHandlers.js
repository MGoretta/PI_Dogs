const { getAllDogs } = require("../controllers/getAllDogs");
const {getDogByIdRaza} = require ("../controllers/getDogByIdRaza");
const getDogsByName = require ("../controllers/getDogsByName")

const getAllDogsHandler = async (req, res) => {
    try {
      // Obtener las razas de los perros utilizando la función fetchDogBreeds
      const dogBreeds = await getAllDogs();
      
      // Responder con las razas de los perros en formato JSON
      res.status(200).json(dogBreeds);
    } catch (error) {
      // Manejar errores
      console.error('Error al obtener las razas de los perros:', error);
      res.status(500).send('Error interno del servidor');
    }
  };

  const getDogByIdHandler = async (req, res) => {
    const { idRaza } = req.params;

    const source = isNaN(idRaza) ? "bdd" : "api";

    try {
        const response = await getDogByIdRaza(idRaza, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDogsByNameHandler = async (req, res) => {
  const { name } = req.query;

  try {
    // Verificar si se proporcionó un nombre
    if (!name) {
      return res.status(400).json({ error: 'Debe proporcionar un nombre de perro.' });
    }

    // Llamar al controlador para buscar perros por nombre
    const dogs = await getDogsByName(name); 
    // Devolver los perros encontrados
    res.status(200).json(dogs);
  } catch (error) {
    console.error('Error al buscar perros por nombre:', error);
    res.status(500).json({ error: 'Ocurrió un error al procesar la solicitud.' });
  }
};
// const getDogsByNameHandler = async (req, res) => {
//   const { name } = req.query;

//   // Verificar si se proporcionó un nombre
//   if (!name) {
//       return res.status(400).json({ error: 'Debe proporcionar un nombre de perro.' });
//   }

//   try {
//     if (name){
//       // Llamar al controlador para buscar perros por nombre
//       const dogs = await getDogsByName(name); 
//       // Devolver los perros encontrados
//       res.status(200).json( dogs );
//     } else {
//       const response = await getAllDogs();
//       res.status(200).json( response );
//    }
      
//     } catch (error) {
//       console.error('Error al buscar perros por nombre:', error);
//       res.status(500).json({ error: 'Ocurrió un error al procesar la solicitud.' });
//   }
// };
 
module.exports = {
    getAllDogsHandler,
    getDogByIdHandler,
    getDogsByNameHandler,
}