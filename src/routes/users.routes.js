const express = require('express')
const fs = require('fs');
const router = express.Router();
const multer = require("multer");
const path = require("path")
const controllers = require('../controllers/users.controllers.js');
const userPath = path.join(__dirname, "../data/users.json");
const {body} = require('express-validator');
const validator = [
    body('name').notEmpty().withMessage('Tienes que ingresar un nombre'),
    body('birth').notEmpty().withMessage('Tienes que ingresar una fecha de nacimiento'),
    body('email').notEmpty().withMessage('Tienes que ingresar un correo electronico').custom((value, {req}) =>{
        let email = req.body.email;
        const usuarios = JSON.parse(fs.readFileSync(userPath, "utf-8"))
        const userFound = usuarios.find(user => user.email == email);
        if(userFound){
            throw new Error("El correo electronico ya esta en uso. Prueba uno nuevo"); 
        }
        return true;


        
    }),
    body('password').notEmpty().withMessage('Tienes que ingresar una contraseña'),
    body('avatar').custom((value, {req}) =>{
        let file = req.file;
        let extensions = [".jpg", ".png", ".gif"];

        if (!file) {
            throw new Error("Tienes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);

            if (!extensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensions.join(", ")}`);
            }
        }

        return true;

    })
];





const pathImages = path.resolve("public")

const { login, register, profile, processRegister, processLogin} = require('../controllers/users.controllers.js')

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

// PROCESO LOGIN DE USUARIOS
router.post("/login", processLogin)

// VISTA REGISTRARSE http://localhost:3000/register
router.get("/register", register)

// REGISTER DE USUARIOS

router.post("/register", upload.single("avatar"),validator, processRegister)


module.exports = router; 