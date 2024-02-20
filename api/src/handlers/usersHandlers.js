const getAllDogs = (req, res) => {
    res.status(200).send("Aquí están todos los dogs");
}

const getDogById = (req, res) => {
    const {idRaza} = req.params;

    res.status(200).send(`Detalle del dog ${idRaza}`);
}

const getDogsByName = (req, res) => {
    const {name} = req.query;
    if (name) res.status(200).send(`Aquí está el usuario ${id}`);
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