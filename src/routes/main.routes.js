const express = require('express')
const router = express.Router();
const controllers = require('../controllers/main.controllers');
const {withLogin} = require('../middlewares/authMiddleware')

// VISTA HOME http://localhost:3000/
router.get("/", controllers.index)

// VISTA CARRITO http://localhost:3000/carrito
router.get("/carrito", withLogin, controllers.cart)

module.exports = router; 