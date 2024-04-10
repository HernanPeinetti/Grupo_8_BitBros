const express = require('express')
const router = express.Router();
const controllersUser = require('../../controllers/APIs/APIusers.controllers.js');

router.get("/", controllersUser.users);

router.get("/detail/:id_user", controllersUser.detail)




module.exports = router; 