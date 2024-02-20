// Importar express y el controlador adecuado para cada ruta
const { Router } = require('express');

const usersRoutes = require ("./usersRoutes.js");

const postRoutes = require('./postRoutes.js');

const router = Router();

router.use ("/dogs", usersRoutes);

router.use ("/dogs", postRoutes);

module.exports = router;
