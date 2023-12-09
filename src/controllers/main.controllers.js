const path = require('path');

const controllers = {

    index: (req, res) => {
        res.render('index.ejs')
    },

    carrito: (req, res) => {
        res.render('carrito.ejs')
    },

};


module.exports = controllers