const path = require('path')

const controllersProducts = {

    producto: (req, res) => {
        res.sendFile(path.resolve("src/views", ("../views/productDetail.html")))
    },
}

module.exports = controllersProducts