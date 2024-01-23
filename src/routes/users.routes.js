const express = require('express')
const router = express.Router();
const controllers = require('../controllers/users.controllers.js');
const {withLogin, withoutLogin} = require('../middlewares/authMiddleware.js');




const { login, register, profile, processRegister, processLogin} = require('../controllers/users.controllers.js')
const {validatorRegister, validatorLogin} = require('../middlewares/validatorUser.js');
const upload = require('../middlewares/multerUsers.js');









// VISTA LOGUEARSE http://localhost:3000/login
router.get("/login", withoutLogin, login)

// PROCESO LOGIN DE USUARIOS

router.post("/login", validatorLogin, processLogin)

// VISTA REGISTRARSE http://localhost:3000/register
router.get("/register",withoutLogin, register)

// REGISTER DE USUARIOS

router.post("/register", upload.single("avatar"),validatorRegister, processRegister)

// Ruta para la vista PROFILE http://localhost:3000/profile
router.get('/profile', withLogin, controllers.profile);

module.exports = router; 