const express = require("express");
const path = require("path");

//Configuraciones
const app = express();
app.use(express.static(path.resolve("src/public")));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//ROUTES 
const indexRoutes = require('./routes/main.routes.js')
const productRoutes = require('./routes/products.routes.js')
const userRoutes = require('./routes/users.routes.js')
const marketRoutes = require('./routes/market.routes.js')

app.use('/', indexRoutes, productRoutes, userRoutes)
app.use('/admin', marketRoutes)

app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
});
