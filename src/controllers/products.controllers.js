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
            include: [{ association: "colors"}, {association: "brand"}, {association: "category"}]
        });

        if (product) {
            const productsRelated = await Product.findAll({
                include: [{ association: "brand"}],
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
        try {
            const productFound = await Product.findByPk(req.params.id, {
                include: [{ association: "brand" }, { association: "colors" }]
            })
    
            if (resultValidator.errors.length > 0) {        
        
                        const colors = await Color.findAll()
                        const categories = await Category.findAll()
        
                        console.log("===========================")
                        console.log(req.body)
                        req.body.category = parseInt(category);
                        req.body.price = parseInt(price);
                        req.body.stock = parseInt(stock);
                        req.body.color1 = parseInt(color1);
                        req.body.color2 = parseInt(color2);
                        req.body.color3 = parseInt(color3);
                        
                        res.render("./products/edit.ejs", { productFound, errors: resultValidator.mapped(), old: req.body, colors, categories });
    
            }
             else {
                let brandUpdate;
                const brandFound = await Brand.findOne({
                    where: {
                        name: brand
                    }
                })

                if (brandFound) {
                    brandUpdate = brandFound
                } else {
                    const newBrand = await Brand.create({
                        name: brand
                    })

                    brandUpdate = await Brand.findByPk(newBrand.id_brand)
                }






                if (productFound) {
                    await Product.update({
                        name: name || productFound.name,
                        image: req.file?.filename || productFound.image,
                        price: parseInt(price) || productFound.price,
                        stock: parseInt(stock) || productFound.stock,
                        description: description || productFound.description,
                        id_category: parseInt(category) || productFound.id_category,
                        id_brand: brandUpdate.id_brand
                    },{
                        where:{
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
            await Product_color.destroy({ where: { id_product: req.params.idDelete } });

            await Product.destroy({ where: { id_product: req.params.idDelete } });
        } catch (e) {
          console.log(e.message);
        }
        
        res.redirect("/");
    },
};

module.exports = controllersProduct;
