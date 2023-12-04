const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/users.controllers.js');


// VISTA LOGIN
ruoter.get("/login", controllers.login)

// VISTA REGISTER
ruoter.get("/register", controllers.register)

module.exports = ruoter; 