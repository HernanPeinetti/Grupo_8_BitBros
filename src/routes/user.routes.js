const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/user.controllers.js');


// LOGIN
ruoter.get("/login", controllers.login)

// REGISTER
ruoter.get("/register", controllers.register)

module.exports = ruoter; 