const express = require('express')
const router = express.Router();
const multer = require("multer");
const path = require("path")
const controllers = require('../controllers/users.controllers.js');
const pathImages = path.resolve("public")

const { login, register,create, processRegister} = require('../controllers/users.controllers.js')

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
router.get("/login", login)

// VISTA REGISTRARSE http://localhost:3000/register
router.get("/register", register)

// REGISTER DE USUARIOS
router.post("/register", upload.single("foto_perfil"), create)

router.post('/register', processRegister)
module.exports = router; 