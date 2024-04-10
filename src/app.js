const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const userLogged = require("./middlewares/userLogged.js")
const currentPage = require("./middlewares/currentPage.js")
const cookieParser = require("cookie-parser");
const session = require("express-session");
//Configuraciones
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve("public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(session({
    secret: '5678912345',
    resave: false,
    saveUninitialized: false,
}));
app.use(userLogged);
app.use(currentPage)


const mainRoutes = require("./routes/main.routes.js");
const productsRoutes = require("./routes/products.routes.js");
const usersRoutes = require("./routes/users.routes.js");

/* APIS routes*/
const APIproductsRoutes = require("./routes/APIs/APIproducts.routes.js");
// const APIproductsRoutes = require("./routes/products.routes.js"); COMPLETAR
// const APIusersRoutes = require("./routes/APIs/APIusers.routes.js");


app.use("/", mainRoutes, usersRoutes);
app.use("/productos", productsRoutes);

/* APIS use*/
app.use("/api/products", APIproductsRoutes);
// app.use("/api/users", APIusersRoutes);


app.listen(3001, () => {
    console.log("Servidor levantado en http://localhost:3001");
});

app.use((req, res, next) => {
    res.status(404).render("notFound", { user: req.session.user });
});
