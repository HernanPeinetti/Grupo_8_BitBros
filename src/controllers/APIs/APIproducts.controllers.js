const { Product, Category } = require('../../database/models')
const { Op } = require('sequelize');
const { includes } = require('../../middlewares/validateProduct');
const { detail } = require('../products.controllers');

const controllers = {
  products: async (req, res) => {

    const productsAll = await Product.findAndCountAll({
      include: [{ association: "category" }, { association: "color" }, { association: "brand" }]
    });
    const categories = await Category.findAll({
      include: [{ association: "products" }]
    });

    const countByCategory = []

    for (let i = 0; i < categories.length; i++) {
      // Creamos un array para almacenar los productos de esta categoría
      let products = [];

      for (let j = 0; j < categories[i].products.length; j++) {
        // Agregamos cada producto al array de productos
        products.push({
          id_product: categories[i].products[j].id_product,
          name: categories[i].products[j].name,
          image: `http://localhost:3001/images/products/${categories[i].products[j].image}`,
          price: categories[i].products[j].price,
          stock: categories[i].products[j].stock,
          description: categories[i].products[j].description,
          url: `http://localhost:3001/api/products/detail/${categories[i].products[j].id_product}`
        });
      }

      // Creamos un objeto para la categoría actual y agregamos los productos
      let newCategory = {
        id_category: categories[i].id_category,
        name: categories[i].name,
        count: categories[i].products.length,
        url: `http://localhost:3001/api/products/${categories[i].name}`,
        products: products // Agregamos los productos al objeto de categoría
      };

      // Agregamos la categoría al array de resultados
      countByCategory.push(newCategory);
    }
    const data = []

    for (let i = 0; i < productsAll.rows.length; i++) {
      data.push({
        id_product: productsAll.rows[i].id_product,
        name: productsAll.rows[i].name,
        image: `http://localhost:3001/images/products/${productsAll.rows[i].image}`,
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
    const category = await Category.findOne({
      include: [{ association: "products" }],
      where: {
        name: req.params.category
      },
    });

    const category_products = []

    for (let i = 0; i < category.products.length; i++) {
      category_products.push({
        id_product: category.products[i].id_product,
        name: category.products[i].name,
        image: `http://localhost:3001/images/products/${category.products[i].image}`,
        price: category.products[i].price,
        stock: category.products[i].stock,
        description: category.products[i].description,
        url: `http://localhost:3001/api/products/detail/${category.products[i].id_product}`
      })
    }

    const response = {
      meta: {
        status: 200,
        count: category_products.length,
        name: category.name,
        url: `http://localhost:3001/api/products/${req.params.category}`,
        method: "GET"
      },

      data: category_products
    }

    res.json(response);
  },

  detail: async (req, res) => {
    const productFound = await Product.findByPk(req.params.id_product,
      { include: [{ association: "category" }, { association: "color" }, { association: "brand" }] });

    const product = {
      id_product: productFound.id_product,
      name: productFound.name,
      image: `http://localhost:3001/images/products/${productFound.image}`,
      price: productFound.price,
      stock: productFound.stock,
      description: productFound.description,
      category: productFound.category.name,
      brand: productFound.brand.name,
      color: productFound.color.name,
    }


    const response = {
      meta: {
        status: 200,
        url: `http://localhost:3001/api/products/detail/${req.params.id_product}`,
        method: "GET",
      },
      data: product
    }
    res.json(response);
  },
};




module.exports = controllers;
