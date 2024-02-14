const fs = require("fs");
const path = require("path");
const userPath = path.join(__dirname, "../data/users.json");
let usersJson = JSON.parse(fs.readFileSync(userPath, "utf-8"));

const userLoggedMiddelware = (req, res, next) => {
    if (req.cookies.rememberUser != undefined && req.session.user == undefined) {
        const userFound = usersJson.find(user => user.email == req.cookies.rememberUser)
        req.session.user = userFound;
    }

    res.locals.user = req.session.user

    next();
};

module.exports = userLoggedMiddelware;