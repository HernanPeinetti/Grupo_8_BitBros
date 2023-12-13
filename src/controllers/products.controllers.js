const path = require('path')

const controllersProduct = {

    detalleProducto: (req, res) => {
        res.render('./products/productDetail.ejs')
        
    },

    create: (req, res) => {
        res.render('./market/create.ejs')
    },
    
    edit: (req, res) => {
        res.render('./market/edit.ejs')
    },

}

module.exports = controllersProduct