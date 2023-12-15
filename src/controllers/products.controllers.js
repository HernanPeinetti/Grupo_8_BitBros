const path = require('path');

const controllersProduct = {
    detalleProducto: (req, res) => {
        res.render('./products/productDetail.ejs');
    },

    create: (req, res) => {
        res.render('./market/create.ejs');
    },

    edit: (req, res) => {
        res.render('./market/edit.ejs');
    },

    remove: (req, res) => {
        const { id } = req.params;
        console.log(id);
    },
};

module.exports = controllersProduct;
