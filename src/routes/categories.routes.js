const express = require('express')
const router = express.Router();
const controllers = require('../controllers/categories.controllers');

router.get("/bicicletas", controllers.bicicletas);
router.get("/accesorios", controllers.accesorios);
router.get("/indumentaria", controllers.indumentaria);
router.get("/repuestos", controllers.repuestos);

module.exports = router; 