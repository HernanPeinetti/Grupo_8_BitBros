const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/products.controllers.js');


// VISTA DETALLE DE PRODUCTOS http://localhost:3000/productos/detalle/1
ruoter.get("/detalle/:id", controllers.detalleProducto)


// VISTA ITEM  http://localhost:3000/productos/editar/1
ruoter.get("/editar/:id", controllers.edit)

// VISTA CREATE http://localhost:3000/productos/crear
ruoter.get("/crear", controllers.create)

router.delete('/delete/:id', controllers.remove)

module.exports = ruoter; 