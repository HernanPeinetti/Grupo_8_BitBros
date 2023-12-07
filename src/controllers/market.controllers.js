const path = require('path')

const controllersMarket = {

    create: (req, res) => {
        res.render('./marketplace/create.ejs')
    },
    edit: (req, res) => {
        res.render('./marketplace/edit.ejs')
    },

}

module.exports = controllersMarket

