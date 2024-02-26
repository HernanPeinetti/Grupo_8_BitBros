module.exports = (sequelize, dataTypes) =>{
    const alias = 'Colors'
    const cols = {
        id_color : {
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
        tableName : 'colors',
        timestamps : false
    }

    const Colors = sequelize.define(alias, cols, config)
    return Colors
}