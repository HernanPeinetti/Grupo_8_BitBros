const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/index.controllers');

// VISTA HOME 
ruoter.get("/", controllers.home)

module.exports = ruoter; 