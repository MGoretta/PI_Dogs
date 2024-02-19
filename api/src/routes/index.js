// Importar express y el controlador adecuado para cada ruta
const { Router } = require('express');

const usersRoutes = require ("./usersRoutes.js");

const postRoute = require ("./postRoutes.js");

const router = Router();

router.use ("/users", usersRoutes);

router.use ("/post", postRoute);

module.exports = router;
