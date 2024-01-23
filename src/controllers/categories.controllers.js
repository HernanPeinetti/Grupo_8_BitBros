const productos = require("../data/products.json");

const controllersCategories = {

    bicicletas: (req, res) => {
        res.render("./categories/bicicletas.ejs", {productos : productos, user: req.session.user});
    },
    accesorios: (req, res) => {
        res.render("./categories/accesorios.ejs", {productos : productos, user: req.session.user});
    },
    indumentaria: (req, res) => {
        res.render("./categories/indumentaria.ejs", {productos : productos, user: req.session.user});
    },
    repuestos: (req, res) => {
        res.render("./categories/repuestos.ejs", {productos : productos, user: req.session.user});
    },   
};

module.exports = controllersCategories;