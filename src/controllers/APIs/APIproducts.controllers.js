const { Product, Category } = require('../../database/models')
const { Op } = require('sequelize');
const { includes } = require('../../middlewares/validateProduct');
const { detail } = require('../products.controllers');

const controllers = {
  products: async (req, res) => {
    try {
      const productsAll = await Product.findAll();
      const response = {
        meta: {
          status: 200,
          count: productsAll.length,
          url: `/api/products/all`,
          method: "GET"
        },
        data: productsAll
      }
      res.json(response);
    } catch (error) {
      console.log(error)
    }
  },


  categories: async (req, res) => {
    const categories = await Category.findAll({
      include: [{ association: "products" }],
      where: {
        name: req.params.category
      },
    });

    const response = {
      meta: {
        status: 200,
        count: categories[0].products.length,
        name: categories[0].name,
        url: `/api/products/${req.params.category}`,
        method: "GET"
      },

      data: categories[0]
    }

    res.json(response);
  },

  detail: async (req, res) => {
    const product = await Product.findByPk(req.params.id_product);
    const response = {
      meta: {
        status: 200,
        url: `/api/products/detail/${req.params.id_product}`,
        method: "GET"
      },
      data: product
    }
    res.json(response);
  },
};




module.exports = controllers;
