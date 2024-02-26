module.exports = (sequelize, dataTypes) =>{
    const alias = 'Brand'
    const cols = {
        id_brand : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            AutoIncrement : true,
        },
        name : {
            type : dataTypes.STRING(200),
            allowNull : false
        }
    }
    const config = {
        tableName : 'brands',
        timestamps : false
    }

    const Brand = sequelize.define(alias, cols, config)
    return Brand
}