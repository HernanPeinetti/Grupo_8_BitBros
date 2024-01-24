const withLogin = (req, res, next) => {
    if (req.session.user === undefined) {
        return res.redirect('/login'); // Redirige al usuario a la página de inicio de sesión
    }
    next();
};

const withoutLogin = (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/profile'); // Redirige al usuario al perfil si ya está autenticado
    }
    next();
};

const adminLogin = (req, res, next) => {
    if (req.session.user === undefined || req.session.user.admin !== true) {
        return res.status(403).send('No tienes permisos de administrador/a'); // Devuelve un código de estado 403 Forbidden si no es administrador
    }
    next();
};

module.exports = { withLogin, withoutLogin, adminLogin };
