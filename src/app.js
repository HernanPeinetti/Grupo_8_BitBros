const express = require("express");
const path = require("path");
const methodOverride = require("method-override");



//Configuraciones
const app = express();


// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve("public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));

//ROUTES 

const mainRoutes = require('./routes/main.routes.js')
const productRoutes = require('./routes/products.routes.js')
const usersRoutes = require('./routes/users.routes.js')
const categoriesRoutes = require('./routes/categories.routes.js')

app.use('/', mainRoutes, usersRoutes)
app.use('/productos', productRoutes) 
app.use('/categories', categoriesRoutes)



app.listen(3000, () => {
  console.log("Servidor levantado en http://localhost:3000");
});

app.use((req, res, next) => {
  res.status(404).render("notFound");
});
