const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Tienes que ingresar un nombre para el producto")
        .bail()
        .isLength({ min: 5 })
        .withMessage("El nombre del producto debe contener al menos 5 caracteres"),
    body("image").custom((value, { req }) => {
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
    body("category")
        .notEmpty()
        .withMessage("Tienes que ingresar una categoría para el producto"),
    body("price")
        .notEmpty()
        .withMessage("Tienes que ingresar un precio para el producto")
        .bail()
        .isNumeric()
        .withMessage("El precio debe ser un número"),
    body("stock")
        .notEmpty()
        .withMessage("Tienes que ingresar un stock para el producto")
        .bail()
        .isNumeric()
        .withMessage("El stock debe ser un número"),
    body("brand")
        .notEmpty()
        .withMessage("Tienes que ingresar una marca para el producto"),
    body("color")
        .notEmpty()
        .withMessage("Tienes que elegir un color"),
    body("description")
        .notEmpty()
        .withMessage("Tienes que ingresar una descripción para el producto")
        .bail()
        .isLength({ min: 20 })
        .withMessage("La descripción debe contener al menos 20 caracteres"),
];
