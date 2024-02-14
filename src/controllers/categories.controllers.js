const path = require('path');
const fs = require('fs');
const pathProducts = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(pathProducts, "utf8"));

const controllersCategories = {

    bicicletas: (req, res) => {
        res.render("./categories/bicicletas.ejs", {products : products});
    },
    accesorios: (req, res) => {
        res.render("./categories/accesorios.ejs", {products : products});
    },
    indumentaria: (req, res) => {
        res.render("./categories/indumentarias.ejs", {products : products});
    },
    repuestos: (req, res) => {
        res.render("./categories/repuestos.ejs", {products : products});
    },   
};

module.exports = controllersCategories;