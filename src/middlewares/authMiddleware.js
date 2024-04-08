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
    const user = req.session.user
    if (user === undefined || user.user_type && user.user_type.name !== "admin") {
        res.locals.message_error = "No tienes permisos de administrador/a"
        res.status(404).render("notFound");
    } else {
        next();
    }
};

module.exports = { withLogin, withoutLogin, adminLogin };
