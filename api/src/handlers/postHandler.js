const createDog = (req, res) => {
    const {image, name, height, weight, life_span, temperaments} = rep.body;
    res.status(200).send("Crear dog con ${name} y cuya altura es ${height} y peso ${weight} y vida ${life_span} y temperamento ${}");
}

module.exports = createDog;