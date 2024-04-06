const currentPage = (req, res, next) => {
    const page = req.path;
    
    res.locals.currentPage = page

    next()
}

module.exports = currentPage