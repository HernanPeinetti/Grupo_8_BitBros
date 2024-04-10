
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const { User } = require('../../database/models')

const controllersUser = {
    users: async (req, res) =>{
        const usersAll = await User.findAll()

        const users = []

        for (let i = 0; i < usersAll.length; i++) {
            users.push({
              id_user: usersAll[i].id_user,
              name: usersAll[i].name,
              email: usersAll[i].email,
              url: `http://localhost:3001/api/users/detail/${usersAll[i].id_user}`
            })
        }

        const lastUser = await User.findOne({
            order: [["created_at", "DESC"]],
        })

        const lastUserCreated = {
            id_user: lastUser.id_user,
            name: lastUser.name,
            email: lastUser.email,
            created_at: lastUser.created_at,
            url: `http://localhost:3001/api/users/detail/${lastUser.id_user}`
            
        }

        const response = {
            meta: {
              status: 200,
              count: usersAll.count,
              lastUserCreated: lastUserCreated,
              url: `http://localhost:3001/api/users`,
              method: "GET"
            },
            data: users
        }
        res.json(response);
    },


    detail: async (req, res) => {
        const userFound = await User.findByPk(req.params.id_user);
    
        const user = {
            id_user: userFound.id_user,
            name: userFound.name,
            email: userFound.email,
            birth: userFound.birth,
            image: `http://localhost:3001/images/userProfile/${userFound.profile_img}`
        }
    
    
        const response = {
          meta: {
            status: 200,
            url: `http://localhost:3001/api/users/detail/${req.params.id_user}`,
            method: "GET",
          },
          data: user
        }
        res.json(response);
    },
    
    
    
};

module.exports = controllersUser;
