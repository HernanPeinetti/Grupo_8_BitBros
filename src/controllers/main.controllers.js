const path = require('path');

const controllers = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, ("../views/index.html")))
    },
    carrito: (req, res) => {
        res.sendFile(path.resolve("src/views", "productCart.html"));
    },
    register: (req, res) => {
        res.sendFile(path.resolve("src/views", "register.html"));
    },
    login: (req, res) => {
        res.sendFile(path.resolve("src/views", "login.html"));
    },
};


module.exports = controllers