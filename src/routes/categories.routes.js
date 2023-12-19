const express = require('express')
const router = express.Router();
const controllers = require('../controllers/categories.controllers');

router.get("/bicicletas", controllers.bicicletas);

module.exports = router; 