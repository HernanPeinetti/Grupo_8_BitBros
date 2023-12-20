const path = require('path')
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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

    update: (req, res) =>{
        const productsFilePath = path.join(__dirname, '../data/products.json');
        let productoId = req.params.id;
        const producto = products.find(producto => producto.id == productoId);

        if(producto){



        }


    }
        



    


}

module.exports = controllersProduct