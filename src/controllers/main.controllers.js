const path = require('path');
const productos= require('../data/productsDataBase.json');

const controllers = {

    index: (req, res) => {
        res.render('index.ejs', {productos : productos})
    },

    carrito: (req, res) => {
        res.render('cart.ejs')
    },

};


module.exports = controllers