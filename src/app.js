const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.resolve("src/public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,("./views/index.html")))
})

app.get("/producto", (req, res) => {
    res.sendFile(path.resolve(__dirname,("./views/productDetail.html")))
})

app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
});
