const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/product.controllers.js');


// DETALLE DE PRODUCTOS
ruoter.get("/producto", controllers.producto)

// CARRITO
ruoter.get("/carrito", controllers.carrito)

module.exports = ruoter; 