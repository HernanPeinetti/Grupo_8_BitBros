const express = require("express");
const app = express();
const path = require("path");


app.listen(3001, () =>{
    console.log("Servidor Levantado");
})

app.get("/", (req, res) =>{
    let homeHtml = path.resolve(__dirname, "./views/index.html");
    res.sendFile(homeHtml);
})