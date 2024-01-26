const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const log = require("./middlewares/log.js");
const rememberUser = require("./middlewares/rememberUser.js")
const cookieParser = require("cookie-parser");
const session = require("express-session");
//Configuraciones
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve("public")));
app.use("/bootstrap", express.static(path.resolve("node_modules/bootstrap/dist")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(session({
    secret: '5678912345',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 5 * 60 * 1000, //cookie de 5 minutos
    },
}));
app.use(rememberUser);
// app.use(log); 


const mainRoutes = require("./routes/main.routes.js");
const productsRoutes = require("./routes/products.routes.js");
const usersRoutes = require("./routes/users.routes.js");
const categoriesRoutes = require("./routes/categories.routes.js");

app.use("/", mainRoutes, usersRoutes);
app.use("/productos", productsRoutes);
app.use("/categorias", categoriesRoutes);

app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
});

app.use((req, res, next) => {
    res.status(404).render("notFound", { user: req.session.user });
});
