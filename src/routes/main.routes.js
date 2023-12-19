const express = require('express')
const router = express.Router();
const controllers = require('../controllers/main.controllers');

// VISTA HOME http://localhost:3000/
router.get("/", controllers.index)

// VISTA CARRITO http://localhost:3000/carrito
router.get("/carrito", controllers.carrito)

module.exports = router; 