const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/product.controllers');


//PRODUCTOS
ruoter.get("/producto", controllers.producto)

module.exports = ruoter; 