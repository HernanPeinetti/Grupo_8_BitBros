const path = require("path");
const fs = require("fs");
const pathProducts = path.join(
    __dirname,
    "..",
    "data",
    "productsDataBase.json"
);
let productsDB = JSON.parse(fs.readFileSync(pathProducts, "utf8"));

const controllersProduct = {
    detalleProducto: (req, res) => {
        res.render("./products/productDetail.ejs");
    },

    crear: (req, res) => {
        res.render("./market/create.ejs");
    },

    editar: (req, res) => {
        res.render("./market/edit.ejs");
    },

    eliminar: (req, res) => {
        const { id } = req.params;

        const producto = productsDB.find((product) => product.id === id);
        if (producto.image != "img-defecto.png") {
            fs.unlinkSync(
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "public",
                    "images",
                    "products",
                    producto.categoria.toLowerCase(), //
                    producto.image
                )
            );
        }

        productsDB = productsDB.filter((product) => product.id != id);
        const productsJSON = JSON.stringify(productsDB, null, "");

        fs.writeFileSync(pathProducts, productsJSON);
        res.redirect("/");
    },
};

module.exports = controllersProduct;
