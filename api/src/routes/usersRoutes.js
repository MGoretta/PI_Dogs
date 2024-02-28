const { Router } = require("express");
const { getAllDogsHandler, getDogByIdHandler, getDogsByNameHandler } = require("../handlers/usersHandlers");

const usersRoutes = Router();

// Ruta para obtener todos los perros
usersRoutes.get("/all", getAllDogsHandler);

// Ruta para obtener un perro por su ID de raza
usersRoutes.get("/:idRaza", getDogByIdHandler);

// Ruta para buscar perros por nombre
usersRoutes.get("/search", getDogsByNameHandler);

// const {Router} = require ("express");
// const {getAllDogsHandler, getDogByIdHandler, getDogsByNameHandler} = require("../handlers/usersHandlers");

// const usersRoutes = Router();

// usersRoutes.get("/", getAllDogsHandler),

// usersRoutes.get("/:idRaza", getDogByIdHandler),

// usersRoutes.get("/", getDogsByNameHandler),

module.exports = usersRoutes;