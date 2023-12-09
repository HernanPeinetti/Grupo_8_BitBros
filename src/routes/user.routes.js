const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/user.controllers.js');


// VISTA LOGIN http://localhost:3000/login
ruoter.get("/login", controllers.login)

// VISTA REGISTER http://localhost:3000/register
ruoter.get("/register", controllers.register)

module.exports = ruoter; 