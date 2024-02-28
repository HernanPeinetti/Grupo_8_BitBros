const withLogin = (req, res, next) => {
    if (req.session.user == undefined) {
        res.redirect("/login");
    } else {
        next();
    }
};

const withoutLogin = (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/profile'); // Redirige al usuario al perfil si ya está autenticado
    }
    next();
};

const adminLogin = (req, res, next) => {
    if (req.session.user === undefined || req.session.user.user_type.name !== "admin") {
        res.send("No tienes permisos de administrador/a");
    } else {
        next();
    }
};

module.exports = { withLogin, withoutLogin, adminLogin };
