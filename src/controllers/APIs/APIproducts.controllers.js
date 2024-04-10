const { Product, Category } = require('../../database/models')
const { Op } = require('sequelize');
const { includes } = require('../../middlewares/validateProduct');
const { detail } = require('../products.controllers');

const controllers = {
  products: async (req, res) => {

    const productsAll = await Product.findAndCountAll({
      include:[{association: "category"}, {association: "color"}, {association: "brand"}]
    });
    const categories = await Category.findAll({
      include: [{ association: "products" }]
    });

    const countByCategory = []

    for (let i = 0; i < categories.length; i++) {
      countByCategory.push({
        id_category: categories[i].id_category,
        name: categories[i].name,
        count: categories[i].products.length,
        url: `http://localhost:3001/api/products/${categories[i].name}`,
        products: categories[i].products
      })

    }
    const data = []

    for (let i = 0; i < productsAll.rows.length; i++) {
      data.push({
        id_product: productsAll.rows[i].id_product,
        name: productsAll.rows[i].name,
        image: productsAll.rows[i].image,
        price: productsAll.rows[i].price,
        stock: productsAll.rows[i].stock,
        description: productsAll.rows[i].description,
        category: productsAll.rows[i].category.name,
        brand: productsAll.rows[i].brand.name,
        color: productsAll.rows[i].color.name,
        url: `http://localhost:3001/api/products/detail/${productsAll.rows[i].id_product}`
      })
    }

    const response = {
      meta: {
        status: 200,
        count: productsAll.count,
        countByCategory: countByCategory,
        url: `http://localhost:3001/api/products`,
        method: "GET"
      },
      data: data
    }
    res.json(response);

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
        url: `http://localhost:3001/api/products/${req.params.category}`,
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
        url: `http://localhost:3001/api/products/detail/${req.params.id_product}`,
        method: "GET"
      },
      data: product
    }
    res.json(response);
  },
};




module.exports = controllers;
