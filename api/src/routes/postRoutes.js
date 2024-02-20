const { Router } = require('express');
const createDogHandler = require("../handlers/postHandler");

const postRoutes = Router();

postRoutes.post("/", createDogHandler);

module.exports = postRoutes;

