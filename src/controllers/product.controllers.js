const path = require('path')

const controllersProducts = {

    // http://localhost:3000/producto  
    producto: (req, res) => {
        res.render('productDetail.ejs')
    },
}

module.exports = controllersProducts