module.exports = (sequelize, dataTypes) =>{
    const alias = 'Product_color'
    const cols = {
        id_product_color : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            AutoIncrement : true,
        },
        id_color : {
            type : dataTypes.INTEGER.UNSIGNED,
        },
        id_product: {
            type : dataTypes.INTEGER.UNSIGNED,
        }
    }
    const config = {
        tableName : 'product_color',
        timestamps : false
    }

    const Product_color = sequelize.define(alias, cols, config)
    return Product_color
}