const path = require("path");
const multer = require("multer");
const fs = require ("fs")
const userPath = path.join(__dirname, "../data/users.json")
const usuarios = JSON.parse(fs.readFileSync(userPath, "utf-8"))
const { v4: uuidv4 } = require('uuid');

const controllersUser = {

    register: (req, res) => {
        res.render("./users/register.ejs");
    },

    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    create: function(req, res){
        let NuevoUsuario = {
            nombre: req.body.nombre,
            fecha_nacimiento: req.body.fecha_nacimiento,
            email: req.body.correo,
            password: req.body.contrasena,
            image: req.file?.filename || "default-image.png",
            id: uuidv4()
        }
        usuarios.push(NuevoUsuario)

        let usuarioJSON = JSON.stringify(usuarios, null, " ");
        fs.writeFileSync(userPath, usuarioJSON)
        
        res.redirect("/login")
    },
    
};


module.exports = controllersUser;
