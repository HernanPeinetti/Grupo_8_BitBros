const express = require("express");
const path = require("path");

//Configuraciones
const app = express();
app.use(express.static(path.resolve("src/public")));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//ROUTES 
const mainRoutes = require('./routes/main.routes.js')
const productRoutes = require('./routes/product.routes.js')

app.use('/', mainRoutes)
app.use('/producto', productRoutes)

app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
});
