const express = require("express");
const path = require("path");

//Configuraciones
const app = express();
app.use(express.static(path.resolve("src/public")));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//ROUTES 
const indexRoutes = require('./routes/index.routes.js')
const productRoutes = require('./routes/product.routes.js')
const userRoutes = require('./routes/user.routes.js')

app.use('/', indexRoutes, productRoutes, userRoutes)

app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
});
