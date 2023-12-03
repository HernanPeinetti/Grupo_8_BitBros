const path = require('path');

const controllers = {
    home: (req, res) => {
        res.render('index.ejs')
    },
    carrito: (req, res) => {
        res.render('productCart.ejs')
    },
    register: (req, res) => {
        res.render('register.ejs')
    },
    login: (req, res) => {
        res.render('login.ejs')
    },
};


module.exports = controllers