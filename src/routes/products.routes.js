const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/products.controllers.js');


// VISTA DETALLE DE PRODUCTOS http://localhost:3000/producto
ruoter.get("/producto", controllers.detalleProducto)

module.exports = ruoter; 