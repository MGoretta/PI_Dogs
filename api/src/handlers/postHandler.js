const createDog = require("../controllers/createDog");

const createDogHandler = async (req, res) => {
    const { image, name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, temperaments } = req.body;

    try {
        const response = await createDog(image, name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, temperaments);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createDogHandler;
