const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/main.controllers');

// VISTA HOME 
ruoter.get("/", controllers.index)

// VISTA CARRITO
ruoter.get("/carrito", controllers.carrito)

module.exports = ruoter; 