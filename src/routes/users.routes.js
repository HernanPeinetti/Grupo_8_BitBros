const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/user.controllers.js');

// VISTA LOGUEARSE http://localhost:3000/login
ruoter.get("/login", controllers.login)

// VISTA REGISTRARSE http://localhost:3000/register
ruoter.get("/register", controllers.register)

module.exports = ruoter; 