const productos = require("../data/products.json");

const controllersCategories = {

    bicicletas: (req, res) => {
        res.render("./categories/bicicletas.ejs", {productos : productos});
    },
    accesorios: (req, res) => {
        res.render("./categories/accesorios.ejs", {productos : productos});
    },
    indumentaria: (req, res) => {
        res.render("./categories/indumentaria.ejs", {productos : productos});
    },
    repuestos: (req, res) => {
        res.render("./categories/repuestos.ejs", {productos : productos});
    },   
};

module.exports = controllersCategories;