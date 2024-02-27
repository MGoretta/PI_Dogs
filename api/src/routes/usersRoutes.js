const {Router} = require ("express");
const {getAllDogsHandler, getDogByIdHandler, getDogsByNameHandler} = require("../handlers/usersHandlers");

const usersRoutes = Router();

usersRoutes.get("/", getAllDogsHandler),

usersRoutes.get("/:idRaza", getDogByIdHandler),

usersRoutes.get("/", getDogsByNameHandler),

module.exports = usersRoutes;