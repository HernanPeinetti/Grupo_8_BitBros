const path = require("path");

const controllersUser = {
    register: (req, res) => {
        res.render("register.ejs");
    },
    login: (req, res) => {
        res.render("login.ejs");
    },
};

module.exports = controllersUser;
