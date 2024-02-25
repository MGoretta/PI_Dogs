//require ('dotenv').config();
const { Dog, Temperament } = require('../db');

const createDog = async (image, name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max,temperaments) => {
  //  try {
        // Crear el perro en la base de datos
        const newDog = await Dog.create({
            image,
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            life_span_min,
            life_span_max,
            temperaments
        });

        let DogTemperaments = await Temperament.findAll({
            where: {
                name: temperaments
            }
        })

        await newDog.addTemperaments(DogTemperaments)

        return newDog;
 //   } catch (error) {
  //     throw new Error('Error al crear el perro: ' + error.message);
    }

module.exports = createDog;
