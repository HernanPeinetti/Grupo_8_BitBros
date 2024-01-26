const path = require("path");
const fs = require("fs");
const pathProducts = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(pathProducts, "utf8"));

const controllers = {
    index: (req, res) => {
        res.render("index.ejs", { products: products, user: req.session.user });
    },

    cart: (req, res) => {
        res.render("cart.ejs", { user: req.session.user});
    },
};

module.exports = controllers;
