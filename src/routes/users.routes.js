const express = require('express')
const router = express.Router();
const multer = require("multer");
const path = require("path")
const controllers = require('../controllers/users.controllers.js');
const {body} = require('express-validator');
const validator = [
    body('name').notEmpty().withMessage('Tienes que ingresar un nombre')
];


const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, path.join(__dirname, "../data/user.json"))
    },
    filename: (req, res, cb) =>{
        console.log(file)
        const newFileName ="";
        cb(null, );
    } 
})

const upload = multer({storage})

// VISTA LOGUEARSE http://localhost:3000/login
router.get("/login", controllers.login)

// VISTA REGISTRARSE http://localhost:3000/register
router.get("/register", controllers.register)

// REGISTER DE USUARIOS
router.post("/register", upload.single(), controllers.create)

module.exports = router; 