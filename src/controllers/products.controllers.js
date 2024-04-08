const path = require("path");
const fs = require("fs");
const { v4: uuidv4, validate } = require("uuid");
const multer = require("multer");
const { validationResult } = require("express-validator");
const { Op, where } = require('sequelize');
const thousand = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const { Product, Color, Category, Brand, Product_color, sequelize } = require('../database/models')

const controllersProduct = {
    detail: async (req, res) => {
        const id = req.params.id;
        const product = await Product.findByPk(id, {
            include: [{ association: "colors" }, { association: "brand" }, { association: "category" }]
        });

        if (product) {
            const productsRelated = await Product.findAll({
                include: [{ association: "brand" }],
                where: {
                    [Op.and]: [{
                        id_category: product.id_category
                    }, {
                        id_product: {
                            [Op.ne]: product.id_product,
                        }
                    }],
                },

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
                let brandNew = await Brand.findOne({
                    where: {
                        name: brand
                    }
                })

                if (brandNew === null) {
                    brandNew = await Brand.create({
                        name: brand
                    })
                }

                const newProduct = await Product.create({
                    name: name,
                    price: parseInt(price),
                    stock: parseInt(stock),
                    description: description,
                    image: req.file?.filename || "default-product.jpg",
                    id_category: parseInt(category),
                    id_brand: brandNew.id_brand
                })

                const colors = [color1, color2, color3]

                for (let i = 0; i < colors.length; i++) {
                    if (colors[i]) {
                        const colores = await Product_color.create({
                            id_color: colors[i],
                            id_product: newProduct.id_product
                        })
                    }
                }

                res.redirect(`/productos/detalle/${newProduct.id_product}`);
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
        try {
            const productFound = await Product.findByPk(req.params.id, {
                include: [{ association: "brand" }, { association: "colors" }]
            })

            if (resultValidator.errors.length > 0) {

                let imagePath = req.file?.path

                if (imagePath) {
                    const imagePath = path.join(__dirname, `../../public/images/products/${req.file?.filename}`)

                    fs.unlinkSync(imagePath)
                }

                const colors = await Color.findAll()
                const categories = await Category.findAll()

                req.body.category = parseInt(category);
                req.body.price = parseInt(price);
                req.body.stock = parseInt(stock);
                req.body.color1 = parseInt(color1);
                req.body.color2 = parseInt(color2);
                req.body.color3 = parseInt(color3);

                res.render("./products/edit.ejs", { product: productFound, errors: resultValidator.mapped(), old: req.body, colors, categories });

            }
            else {
                let brandNew = await Brand.findOne({
                    where: {
                        name: brand
                    }
                })

                if (brandNew === null) {
                    brandNew = await Brand.create({
                        name: brand
                    })
                }

                if (productFound) {
                    if (req.file?.filename && productFound.image !== "default-product.jpg") {
                        const imagePath = path.join(__dirname, `../../public/images/products/${productFound.image}`)

                        fs.unlinkSync(imagePath)
                    }

                    await Product.update({
                        name: name || productFound.name,
                        image: req.file?.filename || productFound.image,
                        price: parseInt(price) || productFound.price,
                        stock: parseInt(stock) || productFound.stock,
                        description: description || productFound.description,
                        id_category: parseInt(category) || productFound.id_category,
                        id_brand: brandNew.id_brand
                    }, {
                        where: {
                            id_product: productFound.id_product
                        }
                    })

                    const colorsProduct = await Product_color.findAll({
                        where: {
                            id_product: productFound.id_product
                        }
                    })

                    for (let i = 0; i < colorsProduct.length; i++) {
                        let updateColor = null;
                        if (color1 != colorsProduct[i].id_color && i === 0) {
                            updateColor = color1;
                        } else if (color2 != colorsProduct[i].id_color && i === 1) {
                            updateColor = color2;
                        } else if (color3 != colorsProduct[i].id_color && i === 2) {
                            newColor = color3;
                        }

                        if (updateColor !== null) {
                            await Product_color.update({
                                id_color: updateColor,
                            }, {
                                where: {
                                    [Op.and]: [{
                                        id_color: colorsProduct[i].id_color
                                    }, {
                                        id_product: productFound.id_product
                                    }]
                                }
                            })
                        }
                    }

                    let newColor = null
                    if (colorsProduct.length === 0 && color1) {
                        newColor = color1
                    } else if (colorsProduct.length === 1 && color2) {
                        newColor = color2
                    } else if (colorsProduct.length === 2 && color3) {
                        newColor = color3
                    }

                    if (newColor !== null) {
                        await Product_color.create({
                            id_color: newColor,
                            id_product: productFound.id_product
                        })
                    }

                    res.redirect(`/productos/detalle/${productFound.id_product}`);
                }
            }

        } catch (error) {
            console.log(error)
        }
    },

    processDelete: async (req, res) => {
        try {
            const productFound = await Product.findByPk(req.params.idDelete)

            if (productFound.image !== "default-product.jpg") {
                const imagePath = path.join(__dirname, `../../public/images/products/${productFound.image}`)

                fs.unlinkSync(imagePath)
            }

            await Product_color.destroy({ where: { id_product: productFound.id_product } });

            await Product.destroy({ where: { id_product: productFound.id_product } });
        } catch (e) {
            console.log(e.message);
        }

        res.redirect("/");
    },
};

module.exports = controllersProduct;
