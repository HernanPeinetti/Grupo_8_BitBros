const path = require("path");
const fs = require("fs");
const { v4: uuidv4, validate } = require("uuid");
const pathProducts = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(pathProducts, "utf8"));
const multer = require("multer");
const { validationResult } = require("express-validator");

const { Product, Color, Category, Brand, Product_color } = require('../database/models')

// const colors = ["Rojo", "Azul", "Verde", "Blanco", "Negro", "Gris", "Naranja", "Amarillo", "Celeste"];




const controllersProduct = {
    detail: (req, res) => {
        const id = req.params.id;
        const product = products.find((producto) => producto.id == id);
        const productsRelated = products.filter((producto) => producto.categoria == product.categoria && producto.id != product.id);
        if (product) {
            res.render("./products/detail.ejs", { product, productsRelated });
        } else {
            res.send("El producto que busca no existe");
        }
    },

    create: async (req, res) => {

        try {
            const colors = await Color.findAll()
            const categories = await Category.findAll()
            res.render("./products/create.ejs", { colors, categories });
        } catch (error) {
            console.log(error)
        }

    },

    processCreate: async (req, res) => {
        const { name, category, price, stock, color1, color2, color3, brand, description } = req.body
        const resultValidator = validationResult(req);

        if (resultValidator.errors.length > 0) {

            let imagePath = req.file?.path

            if (imagePath) {
                const imagePath = path.join(__dirname, `../../public/images/products/${req.file?.filename}`)

                fs.unlinkSync(imagePath)
            }

            try {

                const colors = await Color.findAll()
                const categories = await Category.findAll()

                res.render("./products/create", { errors: resultValidator.mapped(), old: req.body, colors, categories });

            } catch (error) {
                console.log(error)
            }

        } else {

            try {

                const newBrand = await Brand.create({
                    name: brand
                })

                const newBrandFound = await Brand.findByPk(newBrand.id_brand)

                const newProduct = await Product.create({
                    name: name,
                    price: parseInt(price),
                    stock: parseInt(stock),
                    description: description,
                    image: req.file?.filename || "default-product.jpg",
                    id_category: parseInt(category),
                    id_brand: newBrandFound.id_brand
                })

                const newProductFound = await Product.findByPk(newProduct.id_product)

                const colors = [color1, color2, color3]

                for (let i = 0; i < colors.length; i++) {
                    if (colors[i]) {
                        await Product_color.create({
                            id_color: colors[i],
                            id_product: newProductFound.id_product
                        })
                    }
                }

                // const productsRelated = await Product.findAll({
                //     where: {
                //         id_category: parseInt(category)
                //     }
                // })

                // res.render("./products/detail", { product: newProduct, productsRelated });
                // console.log(productsRelated)

                res.redirect('/');

            } catch (error) {
                console.log(error)
            }
        }
    },

    update: async (req, res) => {
        const id = req.params.id;

        try {

            const product = await Product.findByPk(id, {
                include: [{ association: "brand" }, { association: "colors" }]
            })

            if (product) {

                console.log(product.colors[0].id_color)
                const colors = await Color.findAll()
                const categories = await Category.findAll()

                res.render("./products/edit.ejs", { product, colors, categories });

            } else {
                res.send("El producto que busca no existe");
            }

        } catch (error) {
            console.log(error.message)
        }
    },

    processUpdate: async (req, res) => {
        const { name, category, price, stock, color1, color2, color3, brand, description } = req.body;
        const resultValidator = validationResult(req);


        if (resultValidator.errors.length > 0) {
            try {

                const colors = await Color.findAll()
                const categories = await Category.findAll()

                res.render("./products/create", { errors: resultValidator.mapped(), old: req.body, colors, categories });

            } catch (error) {
                console.log(error)
            }
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



                // const productsRelated = products.filter((productI) => productI.category == product.category && productI.id != productFound.id);

                // res.render("./products/detail.ejs", { product: productFound, productsRelated });
                res.redirect("/")
            }
        }


        // const resultValidator = validationResult(req);
        // const product = {
        //     id: req.params.id,
        //     name: req.body.name,
        //     image: req.file?.filename || "default-product.jpg",
        //     category: req.body.category,
        //     price: req.body.price,
        //     stock: req.body.stock,
        //     colors: { color1: req.body.color1, color2: req.body.color2, color3: req.body.color3 },
        //     brand: req.body.brand,
        //     description: req.body.description,
        // };

        // const productFound = products.find((product) => product.id == req.params.id);

        // if (resultValidator.errors.length > 0) {
        //     res.render("./products/edit", { product: productFound, colors: colors, errors: resultValidator.mapped(), old: product });
        // } else {
        //     if (productFound) {
        //         productFound.name = product.name || productFound.name;
        //         productFound.image = req.file?.filename || productFound.image;
        //         productFound.category = product.category || productFound.category;
        //         productFound.price = product.price || productFound.price;
        //         productFound.stock = product.stock || productFound.stock;
        //         productFound.colors = { color1: product.colors.color1, color2: product.colors.color2, color3: product.colors.color3 } || productFound.colors;
        //         productFound.description = product.description || productFound.description;

        //         fs.writeFileSync(pathProducts, JSON.stringify(products, null, " "));

        //         const productsRelated = products.filter((productI) => productI.category == product.category && productI.id != productFound.id);

        //         res.render("./products/detail.ejs", { product: productFound, productsRelated });
        //     }
        // }
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
        res.render("index.ejs", { products: products });
    },
};

module.exports = controllersProduct;
