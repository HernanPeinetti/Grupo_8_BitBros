const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/main.controllers');

// VISTA HOME 
ruoter.get("/", controllers.home)

// VISTA CARRITO
ruoter.get("/carrito", controllers.carrito);

//VISTA REGISTER
ruoter.get("/register", controllers.register);

//LOGIN
ruoter.get("/login", controllers.login);

module.exports = ruoter; 