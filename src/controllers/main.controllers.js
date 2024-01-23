const path = require("path");
const productos = require("../data/products.json");

const controllers = {
    index: (req, res) => {
        res.render("index.ejs", { productos: productos, user: req.session.user });
    },

    cart: (req, res) => {
        res.render("cart.ejs", { user: req.session.user});
    },
};

module.exports = controllers;
