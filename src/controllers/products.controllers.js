const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const pathProducts = path.join(__dirname, "..", "data", "products.json");
let productos = JSON.parse(fs.readFileSync(pathProducts, "utf8"));
const multer = require("multer");

const controllersProduct = {
    detail: (req, res) => {
        const id = req.params.id;
        const product = productos.find((producto) => producto.id == id);
        const productsRelated = productos.filter(
            (producto) =>
                producto.categoria == product.categoria &&
                producto.id != product.id
        );

        if (product) {
            res.render("./products/detail.ejs", { product, productsRelated });
        } else {
            res.send("El producto que busca no existe");
        }
    },

    create: (req, res) => {
        res.render("./products/create.ejs");
    },

    store: (req, res) => {
        const newProduct = {
            id: uuidv4(),
            // ...req.body,
            nombre: req.body.nombre,
            image: req.file?.filename || "default-image.png",
            categoria: req.body.categoria,
            medidas: req.body.medidas,
            precio: req.body.precio,
            stock: req.body.stock,
            colores: req.body.colores,
            descripcion: req.body.descripcion,
        };

        productos.push(newProduct);
        fs.writeFileSync(pathProducts, JSON.stringify(productos, null, ""));


        const productsRelated = productos.filter(
            (product) =>
                product.categoria == newProduct.categoria &&
                product.id != newProduct.id
        );

        res.render("./products/detail.ejs", { product: newProduct, productsRelated });
    },

    edit: (req, res) => {
        const id = req.params.id;
        const producto = productos.find((producto) => producto.id == id);

        res.render("./products/edit.ejs", { producto });
    },

    update: (req, res) => {
        const productoId = req.params.id;
        const producto = productos.find(
            (producto) => producto.id == productoId
        );
        if (producto) {
            producto.nombre = req.body.nombre || producto.nombre;
            // producto.imagen = req.body.imagen || producto.imagen;
            producto.categoria = req.body.categoria || producto.categoria;
            // producto.medidas = req.body.medidas || producto.medidas;
            producto.precio = req.body.precio || producto.precio;
            // producto.stock = req.body.stock || producto.stock;
            // producto.colores = req.body.colores || producto.colores;
            producto.descripcion = req.body.descripcion || producto.descripcion;

            fs.writeFileSync(
                pathProducts,
                JSON.stringify(productos, null, " ")
            );

            const productsRelated = productos.filter(
                (product) =>
                    product.categoria == producto.categoria &&
                    product.id != producto.id
            );

            res.render("./products/detail.ejs", { product: producto, productsRelated });
        }
    },

    remove: (req, res) => {
        const { id } = req.params;
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
                    producto.image
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
