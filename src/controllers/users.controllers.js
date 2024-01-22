const path = require("path");
const multer = require("multer");
const fs = require ("fs")
const userPath = path.join(__dirname, "../data/users.json")
const usuarios = JSON.parse(fs.readFileSync(userPath, "utf-8"))
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')


const controllersUser = {

    register: (req, res) => {
        res.render("./users/register.ejs");
    },

    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    create: function(req, res){
        let NuevoUsuario = {
            id: uuidv4(),
            nombre: req.body.nombre,
            fecha_nacimiento: req.body.fecha_nacimiento,
            email: req.body.correo,
            password: bcryptjs.hashSync(req.body.password, 10), //encriptar contrasena 
            image: req.file?.filename || "default-image.png",
        }
        usuarios.push(NuevoUsuario)

        fs.writeFileSync(userPath, JSON.stringify(usuarios, null, '  ')); //guardarlo en db json

        let usuarioJSON = JSON.stringify(usuarios, null, " ");
        fs.writeFileSync(userPath, usuarioJSON)
        
        res.redirect("/login")
    },
    processRegister: (req, res) => {
        let { email } = req.body
        let users = JSON.parse(fs.readFileSync(userPath, 'utf-8'))
        let userFound = users.find(user => user.email == email)
        userFound ? res.send('El mail ya esta registrado') : null;
        }
    }
    
;


module.exports = controllersUser;
