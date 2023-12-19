const path = require("path");
const productos = require("../data/products.json");

const controllers = {
    index: (req, res) => {
        res.render("index.ejs", { productos: productos });
    },

    cart: (req, res) => {
        res.render("cart.ejs");
    },
};

module.exports = controllers;
