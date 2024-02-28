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
        },
        created_at : {
            type : dataTypes.DATE
        },
        deleted_at : {
            type : dataTypes.DATE
        },
        updated_at : {
            type : dataTypes.DATE
        }
    }
    const config = {
        tableName : 'product_color',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        timestamps : true
    }

    const Product_color = sequelize.define(alias, cols, config)

    return Product_color
}