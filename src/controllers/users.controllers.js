const path = require("path");
const multer = require("multer");
const fs = require("fs");
const userPath = path.join(__dirname, "../data/users.json");
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
let usersJson = JSON.parse(fs.readFileSync(userPath, 'utf-8'));


const controllersUser = {

    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    profile: (req, res) => {
        // Verifica si el usuario está autenticado antes de mostrar la página de perfil
        if (req.session.user) {
            res.render('./users/profile.ejs', { user: req.session.user });
        }
    },

    processLogin: (req, res) => {
        const resultValidator = validationResult(req)
        const usuario = {
            email: req.body.email,
            password: req.body.password
        }
        if (resultValidator.errors.length > 0) {
            res.render('./users/login', { errors: resultValidator.mapped(), old: user })
        } else {

            let userFound = usersJson.find(user => user.email == usuario.email);
            console.log(userFound)
            if (userFound && bcryptjs.compareSync(usuario.password.toString(), userFound.password)) {
                req.session.user = userFound;
                res.redirect("/");
            } else {
                res.redirect("/login");
            }
            // Almacenar información del usuario en la sesión
            //req.session.user = user;
            // Redirigir a la vista /index después de iniciar sesión
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
            usersJson.push(newUser)

            fs.writeFileSync(userPath, JSON.stringify(usersJson, null, '  ')); //guardarlo en db json
            let usuarioJSON = JSON.stringify(usersJson, null, " ");
            fs.writeFileSync(userPath, usuarioJSON)

            req.session.user = newUser;

            res.redirect("/login");
        }
    },

}


module.exports = controllersUser;
