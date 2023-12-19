const express = require('express')
const ruoter = express.Router();
const multer = require("multer");
const path = require("path")
const controllers = require('../controllers/user.controllers.js');


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

// VISTA LOGIN http://localhost:3000/login
ruoter.get("/login", controllers.login)

// VISTA REGISTER http://localhost:3000/register
ruoter.get("/register", controllers.register)

// REGISTER DE USUARIOS
ruoter.post("/register", upload.single(), controllers.create)

ruoter.post("/login", controllers.create)

module.exports = ruoter; 