const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");

module.exports = [
    body("name").notEmpty().withMessage("El nombre del producto no debe estar vacio"),

    body("image").custom((value, { req }) => {
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

    body("category").notEmpty().withMessage("Seleccione una categoria para el producto"),

    body("price").notEmpty().withMessage("El precio del producto no debe estar vacio").isNumeric().withMessage("El precio debe ser un número"),

    body("stock").notEmpty().withMessage("El stock del producto no debe estar vacio"),

    body("brand").notEmpty().withMessage("La marca del producto no debe estar vacío"),

    body().custom((value, { req }) => {
        const { color1, color2, color3 } = req.body;
        if (!color1 && !color2 && !color3) {
            throw new Error("Al menos tiene que elegir un color");
        }
        return true;
    }),

    body("description").notEmpty().withMessage("La descripcion del producto no debe estar vacio").bail().isLength({ min: 10 }).withMessage("La descripción debe tener como minimo 10 caracteres"),
    
];
