const express = require('express')
const router = express.Router();
const controllers = require('../../controllers/APIs/APIproducts.controllers');

// VISTA HOME http://localhost:3000/
router.get("/all", controllers.products);

router.get("/:category", controllers.categories);

router.get("/detail/:id_product", controllers.detail);

module.exports = router; 