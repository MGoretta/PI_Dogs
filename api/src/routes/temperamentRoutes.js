const { Router } = require('express');
const getAllTemperamentsHandler = require ("../handlers/temperamentHandler");

const temperamentRoutes = Router();

temperamentRoutes.get ("/", getAllTemperamentsHandler);

module.exports = temperamentRoutes;