const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require('path');
// const pathImages = path.resolve("public")

const controllers = require("../controllers/products.controllers.js");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images/productos'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

const upload = multer({storage});

// VISTA DETALLE DE PRODUCTOS http://localhost:3000/productos/detalle/id
router.get("/detalle/:id", controllers.detail);

// VISTA CREAR PRODUCTO http://localhost:3000/productos/crear
router.get('/crear', controllers.create);

// VISTA EDITAR PRODUCTO http://localhost:3000/productos/editar/id
router.get("/editar/:id", controllers.edit);

// METODO CREAR PRODUCTO 
router.post('/crear', upload.single('image'), controllers.store);

// METODO ACTUALIZAR PRODUCTO 
router.put("/editar/:id", upload.single('image'), controllers.update);

// METODO ELIMINAR PRODUCTO
router.delete("/eliminar/:id", controllers.remove);


module.exports = router;
