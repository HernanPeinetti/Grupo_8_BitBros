const path = require("path");
const multer = require("multer");
const fs = require ("fs")
const userPath = path.join(__dirname, "../data/users.json")
const usuarios = JSON.stringify(fs.readFileSync(userPath, "utf-8"))

const controllersUser = {

    register: (req, res) => {
        res.render("./users/register.ejs");
    },

    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    create: function(req, res){
        let NuevoUsuario = {
            ...req.bodys
        }
        usuarios.push(NuevoUsuario)

        let usuarioJSON = JSON.stringify(usuarios, null, " ");
        fs.writeFileSyncFileSync(userPath, usuarioJSON)
        
        res.redirect("./users/login.ejs")
    }
    
};


module.exports = controllersUser;
