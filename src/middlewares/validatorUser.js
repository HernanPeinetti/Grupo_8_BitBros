const { body } = require("express-validator");
const path = require("path");
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const validatorRegister = [
    body("name")
        .notEmpty()
        .withMessage("Tienes que ingresar un nombre")
        .bail()
        .isLength({ min: 2 })
        .withMessage("El nombre debe contener al menos 2 caracteres"),
    body("birth")
        .notEmpty()
        .withMessage("Tienes que ingresar una fecha de nacimiento"),
    body("email")
        .notEmpty()
        .withMessage("Tienes que ingresar un correo electronico")
        .bail()
        .custom(async (value, { req }) => {
            let email = req.body.email;
            const userFound = await db.User.findOne({
                where: {
                    email: email
                }
            });
            if (userFound) {
                throw new Error("El correo electronico ya esta en uso. Prueba uno nuevo");
            }
            return true;
        })
        .bail()
        .isEmail()
        .withMessage("El correo electrónico no es válido"),
    body("password")
        .notEmpty()
        .withMessage("Tienes que ingresar una contraseña")
        .bail()
        .isLength({ min: 8 })
        .withMessage("La contraseña debe contener al menos 8 caracteres")
        .bail()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/)
        .withMessage("La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial"),
    body("profile_img").custom((value, { req }) => {
        let file = req.file;
        let extensions = [".jpg", ".jpeg", ".png", ".gif"];

        if (file) {
            let fileExtension = path.extname(file.originalname);

            if (!extensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensions.join(", ")}`);
            }
        }

        return true;
    }),
];

const validatorLogin = [
    body("email")
        .notEmpty()
        .withMessage("Tienes que ingresar un correo electronico")
        .bail()
        .isEmail()
        .withMessage("Debes ingresar un correo valido"),
    body("password")
        .notEmpty()
        .withMessage("Tienes que ingresar una contraseña")
        .bail()
        .isLength({ min: 8 })
        .withMessage("La contraseña debe contener al menos 8 caracteres")
];

module.exports = { validatorRegister, validatorLogin };
