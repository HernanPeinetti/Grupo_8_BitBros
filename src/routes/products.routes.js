const express = require("express");
const router = express.Router();
// const pathImages = path.resolve("public")

const controllers = require("../controllers/products.controllers.js");

const validateProduct = require("../middlewares/validateProduct.js")
const upload = require("../middlewares/multerProducts.js");

//Middleware
const { adminLogin } = require("../middlewares/authMiddleware.js");

// VISTA DETALLE DE PRODUCTOS http://localhost:3000/productos/detalle/id
router.get("/detalle/:id", controllers.detail);

// VISTA CREAR PRODUCTO http://localhost:3000/productos/crear
router.get("/crear", controllers.create);

// VISTA EDITAR PRODUCTO http://localhost:3000/productos/editar/id
router.get("/editar/:id", controllers.edit);

// METODO CREAR PRODUCTO
router.post(
    "/crear",
    upload.single("image"),
    validateProduct,
    controllers.processCreate
);

// METODO ACTUALIZAR PRODUCTO
router.put("/editar/:id", upload.single("image"), validateProduct, controllers.processEdit);

// METODO ELIMINAR PRODUCTO
router.delete("/eliminar/:idDelete", controllers.processDelete);

module.exports = router;
