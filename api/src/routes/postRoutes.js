const { Router } = require('express');

const createDog = require("../handlers/postHandler");

const postRoutes = Router();

postRoutes.post("/", createDog);

module.exports = postRoutes;

