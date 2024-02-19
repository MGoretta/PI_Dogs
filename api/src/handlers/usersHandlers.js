const getAllDogs = (req, res) => {
    res.status(200).send("Aquí están todos los dogs");
}

const getDogById = (req, res) => {
    res.status(200).send("Detalle del dog");
}

const getDogsByName = (req, res) => {
    res.status(200).send("Detalle del dog por name");
}
 
const getAllTemperaments = (req, res) => {
    res.status(200).send("Aquí están todos los temperaments");
}

module.exports = {
    getAllDogs,
    getDogById,
    getDogsByName,
    getAllTemperaments,
}