const fs = require('fs')
const path = require('path')

module.exports = function (res, req, next) {
    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()

    let msg = `El usuario ingreso en: ${req.url} a  las ${hours}: ${minutes}hs \n`
    let pathLog = path.join(__dirname, '..', 'data', 'log.txt')
    fs.appendFileSync(pathLog, msg)
    next()
}

