const express = require('express')
const fs = require('fs');
const router = express.Router();
const multer = require("multer");
const path = require("path")
const controllers = require('../controllers/users.controllers.js');


//****************Middleware require*****************

const {validatorRegister} = require('../middlewares/validatorUser.js');
const upload = require('../middlewares/multerUsers.js');



const { login, register,create, processRegister} = require('../controllers/users.controllers.js')





// VISTA LOGUEARSE http://localhost:3000/login
router.get("/login", login)

// VISTA REGISTRARSE http://localhost:3000/register
router.get("/register", register)

// REGISTER DE USUARIOS

router.post("/register", upload.single("avatar"),validatorRegister, processRegister)


module.exports = router; 