const path = require('path')

const controllersProduct = {

    detalleProducto: (req, res) => {
        res.render('./products/productDetail.ejs')
    },

}

module.exports = controllersProduct