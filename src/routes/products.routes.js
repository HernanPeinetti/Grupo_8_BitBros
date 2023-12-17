const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products.controllers.js');

// VISTA DETALLE DE PRODUCTOS http://localhost:3000/productos/detalle/id
router.get('/detalle/:id', controllers.detalleProducto);

// VISTA ITEM  http://localhost:3000/productos/editar/id
router.get('/editar/:id', controllers.editar);

// VISTA CREATE http://localhost:3000/productos/crear
router.get('/crear', controllers.crear);

// VISTA CREATE http://localhost:3000/productos/eliminar/id
router.delete('/eliminar/:id', controllers.eliminar);

module.exports = router;
