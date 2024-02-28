const path = require('path');
const fs = require('fs');
const {Product} = require('../database/models')


const controllersCategories = {

    bicicletas: async (req, res) => {
        const products = await Product.findAll();
        res.render("./categories/bicicletas.ejs", { products });
    },
    accesorios: async (req, res) => {
        const products = await Product.findAll();
        res.render("./categories/accesorios.ejs", { products });
    },
    indumentaria: async(req, res) => {
        const products = await Product.findAll();
        res.render("./categories/indumentarias.ejs", { products });
    },
    repuestos: async (req, res) => {
        const products = await Product.findAll();
        res.render("./categories/repuestos.ejs", { products });
    },   
};

module.exports = controllersCategories;