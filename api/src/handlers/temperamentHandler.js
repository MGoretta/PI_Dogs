const { getAllTemperaments } = require('../controllers/getAllTemperaments');

const getAllTemperamentsHandler = async (req, res) => {
    try {
        const temperaments = await getAllTemperaments();
        res.status(200).json(temperaments);
    } catch (error) {
        console.error('Error al obtener los temperamentos:', error);
        res.status(500).json({ message: 'Error al obtener los temperamentos' });
    }
  };

  module.exports = getAllTemperamentsHandler;