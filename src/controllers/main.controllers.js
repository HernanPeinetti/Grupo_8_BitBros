const path = require('path');

const controllers = {

    index: (req, res) => {
        res.render('index.ejs')
    },

    cart: (req, res) => {
        res.render('cart.ejs')
    },

};


module.exports = controllers