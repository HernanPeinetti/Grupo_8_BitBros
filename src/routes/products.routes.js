const express = require("express");
const router = express.Router();
const controllers = require("../controllers/products.controllers.js");

// VISTA DETALLE DE PRODUCTOS http://localhost:3000/productos/detalle/id
router.get("/detalle/:id", controllers.detail);

// VISTA CREAR PRODUCTO http://localhost:3000/productos/crear
router.get('/crear', controllers.create);

// VISTA EDITAR PRODUCTO http://localhost:3000/productos/editar/id
router.get("/editar/:id", controllers.edit);

// METODO CREAR PRODUCTO 
router.post('/crear', controllers.store);

// METODO ACTUALIZAR PRODUCTO 
router.put("/editar/:id", controllers.update);

// METODO ELIMINAR PRODUCTO
router.delete("/eliminar/:id", controllers.remove);

module.exports = router;
