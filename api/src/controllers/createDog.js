const { Dog } = require("../db");

const createDog = async (image, name, height, weight, life_span) => {
    return await Dog.create({ image, name, height, weight, life_span });
};

module.exports = {
    createDog,
};