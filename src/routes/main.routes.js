const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/main.controllers');

// VISTA HOME http://localhost:3000/
ruoter.get("/", controllers.index)

// VISTA CARRITO http://localhost:3000/carrito
ruoter.get("/carrito", controllers.cart)

module.exports = ruoter; 