const express = require('express')
const router = express.Router();
const controllers = require('../controllers/products.controllers.js');


// VISTA DETALLE DE PRODUCTOS http://localhost:3000/productos/detalle/1
router.get("/detalle/:id", controllers.detalleProducto)


// VISTA ITEM  http://localhost:3000/productos/editar/1
router.get("/editar/:id", controllers.edit)

// VISTA CREATE http://localhost:3000/productos/crear
router.get("/crear", controllers.create)

module.exports = router; 