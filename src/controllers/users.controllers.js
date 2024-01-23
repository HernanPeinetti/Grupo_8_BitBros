const path = require("path");
const multer = require("multer");
const fs = require("fs")
const userPath = path.join(__dirname, "../data/users.json")
const usuarios = JSON.parse(fs.readFileSync(userPath, "utf-8"))
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')


const controllersUser = {

    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    profile: (req, res) => {
        // Verifica si el usuario está autenticado antes de mostrar la página de perfil
        if (!req.session.user) {
            return res.redirect("/login");
        }

        // Pasa la información necesaria a la vista
        res.render('./users/profile.ejs', { username: req.session.user.name });
    },

    processLogin: (req, res) => {
        const resultValidator = validationResult(req)
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        if (resultValidator.errors.length > 0) {
            res.render('./users/login', { errors: resultValidator.mapped(), old: user })
        } else {
            // Almacenar información del usuario en la sesión
            req.session.user = user;

            // Redirigir a la vista /index después de iniciar sesión
            res.redirect("/");
        }
    },

    register: (req, res) => {
        res.render("./users/register.ejs");
    },


    processRegister: function (req, res) {
        const resultValidator = validationResult(req)
        let newUser = {
            id: uuidv4(),
            name: req.body.name,
            birth: req.body.birth,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10), //encriptar contrasena 
            avatar: req.file?.filename || "default-image.png",
        }

        if (resultValidator.errors.length > 0) {
            res.render('./users/register', { errors: resultValidator.mapped(), old: newUser });
        } else {
            usuarios.push(newUser)

            fs.writeFileSync(userPath, JSON.stringify(usuarios, null, '  ')); //guardarlo en db json
            let usuarioJSON = JSON.stringify(usuarios, null, " ");
            fs.writeFileSync(userPath, usuarioJSON)

            req.session.user = newUser;

            res.redirect("/profile");
        }
    },

}


module.exports = controllersUser;
