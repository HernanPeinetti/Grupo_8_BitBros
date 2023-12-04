const path = require('path')

const controllersProduct = {

    producto: (req, res) => {
        res.render('productDetail.ejs')
    },

    carrito: (req, res) => {
        res.render('productCart.ejs')
    },
}

module.exports = controllersProduct