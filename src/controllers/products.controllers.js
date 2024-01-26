const path = require("path");
const fs = require("fs");
const { v4: uuidv4, validate } = require("uuid");
const pathProducts = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(pathProducts, "utf8"));
const multer = require("multer");
const { validationResult } = require("express-validator");

const colors = ["Rojo", "Azul", "Verde", "Blanco", "Negro", "Gris", "Naranja"];

const controllersProduct = {
    detail: (req, res) => {
        const id = req.params.id;
        const product = products.find((producto) => producto.id == id);
        const productsRelated = products.filter((producto) => producto.categoria == product.categoria && producto.id != product.id);
        if (product) {
            res.render("./products/detail.ejs", { product, productsRelated, user: req.session.user });
        } else {
            res.send("El producto que busca no existe");
        }
    },

    create: (req, res) => {
        res.render("./products/create.ejs", { user: req.session.user, colors: colors });
    },

    processCreate: (req, res) => {
        const resultValidator = validationResult(req);
        const newProduct = {
            id: uuidv4(),
            name: req.body.name,
            image: req.file?.filename || "default-product.jpg",
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            colors: { color1: req.body.color1, color2: req.body.color2, color3: req.body.color3 },
            brand: req.body.brand,
            description: req.body.description,
        };

        if (resultValidator.errors.length > 0) {
            res.render("./products/create", { errors: resultValidator.mapped(), old: newProduct, user: req.session.user, colors: colors });
        } else {
            products.push(newProduct);
            fs.writeFileSync(pathProducts, JSON.stringify(products, null, ""));

            const productsRelated = products.filter((product) => product.category == newProduct.category && product.id != newProduct.id);

            res.render("./products/detail", { product: newProduct, productsRelated, user: req.session.user });
        }
    },

    edit: (req, res) => {
        const id = req.params.id;
        const product = products.find((product) => product.id == id);

        res.render("./products/edit.ejs", { product, user: req.session.user, colors: colors });
    },

    processEdit: (req, res) => {
        const resultValidator = validationResult(req);
        const product = {
            id: req.params.id,
            name: req.body.name,
            image: req.file?.filename || "default-product.jpg",
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            colors: { color1: req.body.color1, color2: req.body.color2, color3: req.body.color3 },
            brand: req.body.brand,
            description: req.body.description,
        };

        const productFound = products.find((product) => product.id == req.params.id);

        if (resultValidator.errors.length > 0) {
            res.render("./products/edit", { product: productFound, user: req.session.user, colors: colors, errors: resultValidator.mapped(), old: product });
        } else {
            if (productFound) {
                productFound.name = product.name || productFound.name;
                productFound.image = req.file?.filename || productFound.image;
                productFound.category = product.category || productFound.category;
                productFound.price = product.price || productFound.price;
                productFound.stock = product.stock || productFound.stock;
                productFound.colors = { color1: product.colors.color1, color2: product.colors.color2, color3: product.colors.color3 } || productFound.colors;
                productFound.description = product.description || productFound.description;

                fs.writeFileSync(pathProducts, JSON.stringify(products, null, " "));

                const productsRelated = products.filter((productI) => productI.category == product.category && productI.id != productFound.id);

                res.render("./products/detail.ejs", { product: productFound, productsRelated, user: req.session.user });
            }
        }
    },

    processDelete: (req, res) => {
        const id = req.params.idDelete;
        
        const productFound = products.find((product) => product.id == id);

        if (productFound && productFound.image != "default-product.jpg") {
            fs.unlinkSync(path.join(__dirname, "../../public/images/products", productFound.image));
        }

        products = products.filter((product) => product.id != id);
        const productsJSON = JSON.stringify(products, null, "");

        fs.writeFileSync(pathProducts, productsJSON);
        res.render("index.ejs", { products: products, user: req.session.user });
    },
};

module.exports = controllersProduct;
