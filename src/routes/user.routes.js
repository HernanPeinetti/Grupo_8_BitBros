const express = require('express')
const router = express.Router();
const controllers = require('../controllers/users.controllers.js');


// VISTA LOGIN http://localhost:3000/login
router.get("/login", controllers.login)

// VISTA REGISTER http://localhost:3000/register
router.get("/register", controllers.register)

module.exports = router; 