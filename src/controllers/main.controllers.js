const path = require("path");
const fs = require("fs");
const {Product} = require('../database/models')

const controllers = {
    index: async (req, res) => {
        const products = await Product.findAll();
      
        res.render("index.ejs", { products });
    },

    cart: (req, res) => {
        res.render("cart.ejs");
    },
};

module.exports = controllers;
