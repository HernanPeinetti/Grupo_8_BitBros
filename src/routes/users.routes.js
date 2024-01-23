const express = require('express')
const router = express.Router();
const controllers = require('../controllers/users.controllers.js');




const { login, register, profile, processRegister, processLogin} = require('../controllers/users.controllers.js')
const {validatorRegister, validatorLogin} = require('../middlewares/validatorUser.js');
const upload = require('../middlewares/multerUsers.js');









// VISTA LOGUEARSE http://localhost:3000/login
router.get("/login", login)

// PROCESO LOGIN DE USUARIOS

router.post("/login", validatorLogin, processLogin)

// VISTA REGISTRARSE http://localhost:3000/register
router.get("/register", register)

// REGISTER DE USUARIOS

router.post("/register", upload.single("avatar"),validatorRegister, processRegister)


module.exports = router; 