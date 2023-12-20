const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid')
const pathProducts = path.join(__dirname, "..", "data", "products.json");
let productos = JSON.parse(fs.readFileSync(pathProducts, "utf8"));

const controllersProduct = {
  detail: (req, res) => {
    let id = req.params.id;
    let product = productos.find((product) => product.id == id);
    if (product) {
      res.render("./products/detail.ejs", { product })
    }
    res.send('El producto que busca no existe')
  },

  create: (req, res) => {
    res.render("./products/create.ejs");
  },

  store: (req, res) => {
    let productos = JSON.parse(fs.readFileSync(pathProducts, "utf8"));
    let newProduct = {
      id: uuidv4(),
      ...req.body
    }
    productos.push(newProduct)
    fs.writeFileSync(pathProducts, JSON.stringify(productos, null, ''))
    res.redirect('/')

  },



  edit: (req, res) => {
    const id = req.params.id;
    let producto = productos.find((producto) => producto.id == id);

    res.render("./products/edit.ejs", { producto });
  },

  update: (req, res) => {
    let productos = JSON.parse(fs.readFileSync(pathProducts, "utf8"));

    let productoId = req.params.id;
    const producto = productos.find((producto) => producto.id == productoId);

    console.log(req.body);
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
