const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.resolve("src/public")));

//ROUTES 
const mainRoutes = require('./routes/main.routes.js')
const productRoutes = require('./routes/product.routes.js')

app.use('/', mainRoutes)
app.use('/products', mainRoutes)

app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
});
