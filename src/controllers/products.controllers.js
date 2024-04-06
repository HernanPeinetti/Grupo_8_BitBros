const path = require("path");
const fs = require("fs");
const { v4: uuidv4, validate } = require("uuid");
const multer = require("multer");
const { validationResult } = require("express-validator");
const { Op } = require('sequelize');
const thousand = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const { Product, Color, Category, Brand, Product_color, sequelize } = require('../database/models')

const controllersProduct = {
    detail: async (req, res) => {
        const id = req.params.id;
        const product = await Product.findByPk(id, {
            include: [{ association: "colors" }]
        });

        if (product) {
            const productsRelated = await Product.findAll({
                where: {
                    [Op.and]: [{
                        id_category: product.id_category
                    }, {
                        id_product: {
                            [Op.ne]: product.id_product,
                        }
                    }],
                }
            })
            res.render("./products/detail.ejs", { product, productsRelated, thousand });
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

                let idBrand;
                const brandFound = await Brand.findOne({
                    where: {
                        name: brand
                    }
                })

                if (brandFound) {
                    idBrand = brandFound.id_brand
                } else {
                    const newBrand = await Brand.create({
                        name: brand
                    })

                    idBrand = await Brand.findByPk(newBrand.id_brand)
                }

                const newProduct = await Product.create({
                    name: name,
                    price: parseInt(price),
                    stock: parseInt(stock),
                    description: description,
                    image: req.file?.filename || "default-product.jpg",
                    id_category: parseInt(category),
                    id_brand: idBrand.id_brand
                })

                const colors = [color1, color2, color3]

                for (let i = 0; i < colors.length; i++) {
                    if (colors[i]) {
                        await Product_color.create({
                            id_color: colors[i],
                            id_product: newProduct.id_product
                        })
                    }
                }

                const productsRelated = await Product.findAll({
                    where: {
                        [Op.and]: [{
                            id_category: newProduct.id_category
                        }, {
                            id_product: {
                                [Op.ne]: newProduct.id_product,
                            }
                        }],
                    }
                })

                res.render("./products/detail", { product: newProduct, productsRelated, thousand });
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



                const productsRelated = await Product.findAll({
                    where: {
                        [Op.and]: [{
                            id_category: product.id_category
                        }, {
                            id_product: {
                                [Op.ne]: product.id_product,
                            }
                        }],
                    }
                })

                res.render("./products/detail.ejs", { product: productFound, productsRelated, thousand });
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
        res.render("index.ejs", { products: products, thousand });
    },
};

module.exports = controllersProduct;
