const path = require('path');

const controllers = {
    home: (req, res) => {
        res.render('index.ejs')
    },
};


module.exports = controllers