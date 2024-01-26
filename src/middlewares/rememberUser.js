const fs = require("fs");
const path = require("path");
const userPath = path.join(__dirname, "../data/users.json");
let usersJson = JSON.parse(fs.readFileSync(userPath, "utf-8"));

const rememberUserMiddelware = (req, res, next) => {
    if (req.cookies.rememberUser != undefined && req.session.user == undefined) {
        const userSign = usersJson.find(user => user.email == req.cookies.rememberUser)

        req.session.user = userSign;
    }

    next();
};

module.exports = rememberUserMiddelware;