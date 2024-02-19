const {Router} = require ("express");

const {getAllDogs, getDogById, getDogsByName, getAllTemperaments} = require("../handlers/usersHandlers");

const usersRoutes = Router();

usersRoutes.get("/", getAllDogs),

usersRoutes.get("/:idRaza", getDogById),

usersRoutes.get("/name", getDogsByName),

usersRoutes.get("/temperament", getAllTemperaments),

module.exports = usersRoutes;