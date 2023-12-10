const path = require('path')

const controllersMarket = {

    create: (req, res) => {
        res.render('./market/create.ejs')
    },
    edit: (req, res) => {
        res.render('./market/edit.ejs')
    },

}

module.exports = controllersMarket

