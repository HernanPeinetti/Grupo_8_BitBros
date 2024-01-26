const path = require("path");
const multer = require("multer");
const fs = require("fs");
const userPath = path.join(__dirname, "../data/users.json");
const { v4: uuidv4 } = require("uuid");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
let usersJson = JSON.parse(fs.readFileSync(userPath, "utf-8"));

const controllersUser = {
    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    profile: (req, res) => {
        // Verifica si el usuario está autenticado antes de mostrar la página de perfil
        if (req.session.user) {
            res.render("./users/profile.ejs", { user: req.session.user });
        }
    },

    processLogin: (req, res) => {
        const resultValidator = validationResult(req);
        const usuario = {
            email: req.body.email,
            password: req.body.password,
        };
        if (resultValidator.errors.length > 0) {
            res.render("./users/login", {
                errors: resultValidator.mapped(),
                old: usuario,
            });
        } else {
            let userFound = usersJson.find((user) => user.email == usuario.email);
            if (userFound && bcryptjs.compareSync(usuario.password.toString(), userFound.password)) {
                req.session.user = userFound;
                res.redirect("/");
            } else {
                res.render("./users/login.ejs", {
                    errors:
                        userFound == undefined
                            ? {
                                  email: {
                                      msg: "No hay una cuenta registrada con el correo ingresado",
                                  },
                              }
                            : bcryptjs.compareSync(usuario.password.toString(), userFound.password) == false
                            ? {
                                  password: {
                                      msg: "La constraseña es incorrecta",
                                  },
                              }
                            : "",
                    old: usuario,
                });
            }
        }
    },

    register: (req, res) => {
        res.render("./users/register.ejs");
    },

    processRegister: function (req, res) {
        const resultValidator = validationResult(req);
        let newUser = {
            id: uuidv4(),
            name: req.body.name,
            birth: req.body.birth,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10), //encriptar contrasena
            avatar: req.file?.filename || "default-user.svg",
        };

        if (resultValidator.errors.length > 0) {
            res.render("./users/register", {
                errors: resultValidator.mapped(),
                old: newUser,
            });
        } else {
            usersJson.push(newUser);

            fs.writeFileSync(userPath, JSON.stringify(usersJson, null, "  ")); //guardarlo en db json
            let usuarioJSON = JSON.stringify(usersJson, null, " ");
            fs.writeFileSync(userPath, usuarioJSON);

            res.redirect("/login");
        }
    },
};

module.exports = controllersUser;
