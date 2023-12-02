const path = require('path')

const controllersProducts = {

    // http://localhost:3000/producto  
    producto: (req, res) => {
        res.sendFile(path.resolve( 'src/views' , ("productDetail.html")))
    },
}

module.exports = controllersProducts