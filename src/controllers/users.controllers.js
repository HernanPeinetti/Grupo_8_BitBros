const path = require("path");
const multer = require("multer");
const fs = require ("fs")
const userPath = path.join(__dirname, "../data/users.json")
const usuarios = JSON.parse(fs.readFileSync(userPath, "utf-8"))
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')


const controllersUser = {

    register: (req, res) => {
        res.render("./users/register.ejs");
    },

    login: (req, res) => {
        res.render("./users/login.ejs");
    },

    processLogin: (req, res) => {
        let userToLogin = users.findByField("email", req.body.email)
        if (userToLogin) {

        }
        return res.render("./users/login.ejs")
    },
    
    create: function(req, res){
        let NuevoUsuario = {
            id: uuidv4(),
            name: req.body.name,
            birth: req.body.birth,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10), //encriptar contrasena 
            avatar: req.file?.filename || "default-image.png",
        }


        if(resultValidator.errors.length > 0){
            res.render('./users/register', {errors: resultValidator.mapped(),old: NuevoUsuario});
        }else{
            usuarios.push(NuevoUsuario)
            
            fs.writeFileSync(userPath, JSON.stringify(usuarios, null, '  ')); //guardarlo en db json

            let usuarioJSON = JSON.stringify(usuarios, null, " ");
            fs.writeFileSync(userPath, usuarioJSON)
        
            res.redirect("/login")
        }
            



        
        

    },
    // processRegister: (req, res) => {
    //     let { email } = req.body
    //     let users = JSON.parse(fs.readFileSync(userPath, 'utf-8'))
    //     let userFound = users.find(user => user.email == email)
    //     userFound ? res.send('El mail ya esta registrado') : null;
    //     }
    }
    
;


module.exports = controllersUser;
