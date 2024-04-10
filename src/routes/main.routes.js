const express = require('express')
const router = express.Router();
const controllers = require('../controllers/main.controllers');
const {withLogin} = require('../middlewares/authMiddleware')

// VISTA HOME http://localhost:3000/
router.get("/", controllers.index)

// VISTA CATEGORIAS http://localhost:3000/categorias
router.get("/categorias/:category", controllers.categories)

// VISTA search http://localhost:3000/search
router.get("/search", controllers.search)


module.exports = router; 