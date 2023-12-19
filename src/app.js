const express = require("express");
const path = require("path");

//Configuraciones
const app = express();
app.use(express.static(path.resolve("public")));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//ROUTES 
const mainRoutes = require('./routes/main.routes.js')
const productRoutes = require('./routes/products.routes.js')
const userRoutes = require('./routes/user.routes.js')
const categoriesRoutes = require('./routes/categories.routes.js')

app.use('/', mainRoutes, userRoutes)
app.use('/productos', productRoutes) 
app.use('/categories', categoriesRoutes)

app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
});
