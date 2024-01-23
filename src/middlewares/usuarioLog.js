const log = require("./log")

module.exports = (req, res, netx) => {
    if(req.session.userLogged){
        console.log('Estas logueado');
        netx()
    } else {
        console.log('No estas logueado')
        res.redirect('users/register');
    }
}