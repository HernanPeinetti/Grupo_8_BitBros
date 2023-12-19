const path = require("path");
const fs = require("fs");
const pathProducts = path.join(__dirname, "..", "data", "products.json");
let productos = JSON.parse(fs.readFileSync(pathProducts, "utf8"));

const controllersProduct = {
    detail: (req, res) => {
        let id = req.params.id;
        let product = productos.find((product) => product == id);
        if (product) {
            res.render("./products/detail.ejs, {product}")
        }
        res.send('El producto que busca no existe')
    },

    create: (req, res) => {
        res.render("./products/create.ejs");
    },

    edit: (req, res) => {
        res.render("./products/edit.ejs");
    },

    remove: (req, res) => {
        const { id } = req.params;

        console.log(id);

        const producto = productos.find((producto) => producto.id == id);

        if (producto.imagen != "img-defecto.png") {
            fs.unlinkSync(
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "public",
                    "images",
                    "productos",
                    producto.categoria, //
                    producto.imagen
                )
            );
        }

        productos = productos.filter((producto) => producto.id != id);
        const productsJSON = JSON.stringify(productos, null, "");

        fs.writeFileSync(pathProducts, productsJSON);
        res.render("index.ejs", { productos: productos });
    },
};

module.exports = controllersProduct;
