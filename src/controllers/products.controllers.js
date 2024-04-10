const path = require("path");
const fs = require("fs");
const { v4: uuidv4, validate } = require("uuid");
const multer = require("multer");
const { validationResult } = require("express-validator");
const { Op, where } = require('sequelize');
const thousand = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const firstLetter = (param) => {
    return param.charAt(0).toUpperCase() + param.slice(1)
}

const { Product, Color, Category, Brand, sequelize } = require('../database/models')

const controllersProduct = {
    detail: async (req, res) => {
        const id = req.params.id;

        try {

            const product = await Product.findByPk(id, {
                include: [{ association: "brand" }, { association: "category" }, { association: "color" }]
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

        } catch (error) {
            console.log(error)
        }
    },

    create: async (req, res) => {
        try {
            const colors = await Color.findAll()
            colors.forEach(color => {
                color.name = firstLetter(color.name)
            })

            const categories = await Category.findAll()
            categories.forEach(category => {
                category.name = firstLetter(category.name)
            })

            res.render("./products/create.ejs", { colors, categories });
        } catch (error) {
            console.log(error)
        }

    },

    processCreate: async (req, res) => {
        const { name, category, price, stock, color, brand, description } = req.body
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
                    id_brand: brandNew.id_brand,
                    id_color: parseInt(color)
                })

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
                include: [{ association: "brand" }, { association: "color" }]
            })

            console.log(product.color.name)

            if (product) {

                const colors = await Color.findAll()
                colors.forEach(color => {
                    color.name = firstLetter(color.name)
                })

                const categories = await Category.findAll()
                categories.forEach(category => {
                    category.name = firstLetter(category.name)
                })

                res.render("./products/edit.ejs", { product, colors, categories });

            } else {
                res.send("El producto que busca no existe");
            }

        } catch (error) {
            console.log(error.message)
        }
    },

    processUpdate: async (req, res) => {
        const { name, category, price, stock, color, brand, description } = req.body;

        const resultValidator = validationResult(req);
        try {
            const productFound = await Product.findByPk(req.params.id, {
                include: [{ association: "brand" }, { association: "color" }]
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
                req.body.color = parseInt(color);

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
                        id_brand: brandNew.id_brand,
                        id_color: parseInt(color) || productFound.id_color
                    }, {
                        where: {
                            id_product: productFound.id_product
                        }
                    })

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

            await Product.destroy({ where: { id_product: productFound.id_product } });
        } catch (e) {
            console.log(e.message);
        }

        res.redirect("/");
    },
};

module.exports = controllersProduct;
