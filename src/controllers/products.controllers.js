const path = require("path");
const fs = require("fs");
const pathProducts = path.join(__dirname, "..", "data", "products.json");
let productsDB = JSON.parse(fs.readFileSync(pathProducts, "utf8"));

const controllersProduct = {

    detail: (req, res) => {
        res.render("./products/detail.ejs");
    },

    create: (req, res) => {
        res.render("./products/create.ejs");
    },

    edit: (req, res) => {
        res.render("./products/edit.ejs");
    },

    remove: (req, res) => {
        const { id } = req.params;

        // const producto = productsDB.find((product) => product.id === id);
        // if (producto.image != "img-defecto.png") {
        //     fs.unlinkSync(
        //         path.join(
        //             __dirname,
        //             "..",
        //             "..",
        //             "public",
        //             "images",
        //             "products",
        //             producto.categoria.toLowerCase(), //
        //             producto.image
        //         )
        //     );
        // }

        productsDB = productsDB.filter((product) => product.id != id);
        const productsJSON = JSON.stringify(productsDB, null, "");

        fs.writeFileSync(pathProducts, productsJSON);
        res.redirect("/");
    },
    
};

module.exports = controllersProduct;
