const express = require('express')
const ruoter = express.Router();
const controllers = require('../controllers/market.controllers.js');

// VISTA CREATE http://localhost:3000/admin/create
ruoter.get("/create", controllers.create)

// VISTA ITEM  http://localhost:3000/admin/edit
ruoter.get("/edit", controllers.edit)

module.exports = ruoter; 


