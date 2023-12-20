const express = require('express')
const router = express.Router();
const multer = require("multer");
const path = require("path")
const controllers = require('../controllers/users.controllers.js');
const pathImages = path.resolve("public")


const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(pathImages, "/images/userProfile"))
    },
    filename: (req, file, cb) =>{
        const newFileName ="perfil-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    },
})

const upload = multer({storage})

// VISTA LOGUEARSE http://localhost:3000/login
router.get("/login", controllers.login)

// VISTA REGISTRARSE http://localhost:3000/register
router.get("/register", controllers.register)

// REGISTER DE USUARIOS
router.post("/register", upload.single("foto_perfil"), controllers.create)

module.exports = router; 