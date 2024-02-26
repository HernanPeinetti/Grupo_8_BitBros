const path = require("path");
const multer = require("multer");
const fs = require("fs");
const userPath = path.join(__dirname, "../data/users.json");
const { v4: uuidv4 } = require("uuid");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
let usersJson = JSON.parse(fs.readFileSync(userPath, "utf-8"));

const { User } = require('../database/models')

const controllersUser = {
    profile: (req, res) => {
        if (req.session.user) {
            res.render("./users/profile.ejs");
        }
    },

    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    processLogin: async (req, res) => {
        try {
            const {email, password, remember} = req.body;
            const userFound = await User.findOne({
                where: {
                    email
                }
            })
            if (userFound && bcryptjs.compareSync(password.toString(), userFound.password)) {
                delete userFound.password;        
                req.session.user = userFound;

                let cookieUser= remember;

                        if (cookieUser == "on") {
                            res.cookie("rememberUser", userFound.email, { maxAge: 1 * 60 * 60 * 1000 }); // 1 hora
                        }
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
                                    : bcryptjs.compareSync(password.toString(), userFound.password) == false
                                        ? {
                                            password: {
                                                msg: "La constraseña es incorrecta",
                                            },
                                        }
                                        : "",
                            old: req.body,
                        });
                    }

            
        } catch (error) {
            console.log(error)   
        }
        // const resultValidator = validationResult(req);
        // const usuario = {
        //     email: req.body.email,
        //     password: req.body.password,
        // };
        // let cookieUser = req.body.rembember;

        // if (resultValidator.errors.length > 0) {

        //     res.render("./users/login", { errors: resultValidator.mapped(), old: usuario });

        // } else {
        //     let userFound = usersJson.find((user) => user.email == usuario.email);

        //     if (userFound && bcryptjs.compareSync(usuario.password.toString(), userFound.password)) {
        //         req.session.user = userFound;
        //         if (cookieUser == "on") {
        //             res.cookie("rememberUser", userFound.email, { maxAge: 1 * 60 * 60 * 1000 }); // 1 hora
        //         }
        //         res.redirect("/");
        //     } else {
        //         res.render("./users/login.ejs", {
        //             errors:
        //                 userFound == undefined
        //                     ? {
        //                         email: {
        //                             msg: "No hay una cuenta registrada con el correo ingresado",
        //                         },
        //                     }
        //                     : bcryptjs.compareSync(usuario.password.toString(), userFound.password) == false
        //                         ? {
        //                             password: {
        //                                 msg: "La constraseña es incorrecta",
        //                             },
        //                         }
        //                         : "",
        //             old: usuario,
        //         });
        //     }
        // }
    },

    register: (req, res) => {
        res.render("./users/register.ejs");
    },

    processRegister: async (req, res) => {
        try {
            const resultValidator = validationResult(req);
            
            const { name, birth, email, password } = req.body

            if (resultValidator.errors.length > 0) {
                let imagePath = req.file?.path

                if (imagePath) {
                    const imagePath = path.join(__dirname, `../../public/images/userProfile/${req.file?.filename}`)

                    fs.unlinkSync(imagePath)
                }

                res.render("./users/register", {
                    errors: resultValidator.mapped(),
                    old: req.body
                });
            } else {
                await User.create({
                    name: name,
                    birth: birth,
                    email: email,
                    password: bcryptjs.hashSync(password, 10),
                    profile_img: req.file?.filename || "default-user.svg",
                    id_user_type: 1
                })

                res.redirect("/login");
            }

        } catch (error) {
            console.log(error.message)
        }

    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('connect.sid');
        res.clearCookie('rememberUser')
        res.redirect('/login');
    }
};

module.exports = controllersUser;
