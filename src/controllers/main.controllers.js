const path = require("path");
const fs = require("fs");
const { Product, Category } = require('../database/models')
const { Op } = require('sequelize');

const controllers = {
  index: async (req, res) => {

    const productsNews = await Product.findAll({
      include: [{ association: "category" }],
      order: [['created_at', 'DESC']],
      limit: 10
    });

    const productsAll = await Product.findAll({
      include: [{ association: "category" }],
    });

    res.render("index.ejs", { productsNews, productsAll });
  },

  categories: async (req, res) => {
    console.log(req.params.category)
    const products = await Product.findAll({
      include: [{
        association: "category",
        where: {
          name: req.params.category
        }
      }, { association: "brand", }
      ]
    });

    res.render("./categories.ejs", { products });
  },

  cart: (req, res) => {
    res.render("cart.ejs");
  },

  search: async (req, res) => {
    if (req.query?.q) {
      let productsArray = [];

      const categories = await Category.findAll({
        include: [{ association: "products" }],
        where: {
          name: {
            [Op.like]: `%${req.query?.q}%` // Falta corregir para que no haya SQL inection
          }
        }
      });

      if (categories) {
        categories.forEach(category => {
          category.products.forEach(product => {
            productsArray.push(product.dataValues);
          });
        });
      }

      const products = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${req.query?.q}%` // Falta corregir para que no haya SQL inection
          }
        }
      });

      if (products) {
        products.forEach(product => {
          productsArray.push(product.dataValues);
        });
      }

      let productsFilters = [];

      for (let product of productsArray) {
        let encontrado = false;
        for (let productFilter of productsFilters) {
          if (productFilter.id_product === product.id_product) {
            encontrado = true;
            break;
          }
        }
        if (!encontrado) {
          productsFilters.push(product);
        }
      }

      res.render("./categories.ejs", { products: productsFilters });
    }
  }
};

module.exports = controllers;
