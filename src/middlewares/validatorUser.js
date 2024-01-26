const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");
const userPath = path.join(__dirname, "../data/users.json");

const validatorRegister = [
    body("name").notEmpty().withMessage("Tienes que ingresar un nombre"),
    body("birth").notEmpty().withMessage("Tienes que ingresar una fecha de nacimiento"),
    body("email")
        .notEmpty()
        .withMessage("Tienes que ingresar un correo electronico")
        .custom((value, { req }) => {
            let email = req.body.email;
            const usuarios = JSON.parse(fs.readFileSync(userPath, "utf-8"));
            const userFound = usuarios.find((user) => user.email == email);
            if (userFound) {
                throw new Error("El correo electronico ya esta en uso. Prueba uno nuevo");
            }
            return true;
        }),
    body("password").notEmpty().withMessage("Tienes que ingresar una contraseña"),
    body("avatar").custom((value, { req }) => {
        let file = req.file;
        let extensions = [".jpg", ".png", ".gif"];

        if (file) {
            let fileExtension = path.extname(file.originalname);

            if (!extensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensions.join(", ")}`);
            }
        }

        return true;
    }),
];

const validatorLogin = [body("email").notEmpty().withMessage("Tienes que ingresar un correo electronico").bail().isEmail().withMessage("Debes ingresar un correo valido"), body("password").notEmpty().withMessage("Tienes que ingresar una contraseña").bail().isLength({ min: 6 }).withMessage("La contraseña debe tener más de 6 caracteres")];

module.exports = { validatorRegister, validatorLogin };
