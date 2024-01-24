const withLogin = (req, res, next) => {
    if (req.session.user == undefined) {
        res.redirect("/login");
    } else {
        next();
    }
};

const withoutLogin = (req, res, next) => {
    if (req.session.user) {
        res.redirect("./profile");
    } else {
        next();
    }
};
const adminLogin = (req, res, next) => {
    if (req.session.user === undefined || req.session.user.admin !== true) {
        res.send("No sos admin pa");
    } else {
        next();
    }
};

module.exports = { withLogin, withoutLogin, adminLogin };
