const path = require("path");
const fs = require("fs");
const {Product} = require('../database/models')
const { Op } = require('sequelize');

const controllers = {
    index: async (req, res) => {
        let products;
        if(req.query?.search){
            products = await Product.findAll({
                include: [{ association: "category" }],
                where: {
                  name: {
                    [Op.like]: `%${req.query?.search}%` // Falta corregir para que no haya SQL inection
                  }
                }
              });
        }
        else{
            products = await Product.findAll({
              include: [{ association: "category" }],
            });
        }
        res.render("index.ejs", { products });
    },

    cart: (req, res) => {
        res.render("cart.ejs");
    },
};

module.exports = controllers;
