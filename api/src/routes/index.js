// Importar express y el controlador adecuado para cada ruta
const { Router } = require('express');
const usersRoutes = require("./usersRoutes.js");
const postRoutes = require('./postRoutes.js');
const temperamentRoutes = require('./temperamentRoutes.js'); 

const router = Router();

router.use("/dogs", usersRoutes);
router.use("/dogs", postRoutes);
router.use("/temperaments", temperamentRoutes); 

module.exports = router;

