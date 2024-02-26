module.exports = (sequelize, dataTypes) =>{
    const alias = 'Measure'
    const cols = {
        height : {
            type : dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull : false
        },
        id_measure : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            AutoIncrement : true
        }, 
        length : {
            type : dataTypes.DECIMAL.UNSIGNED,
            allowNull : false
        }, 
        width : {
            type : dataTypes.DECIMAL.UNSIGNED,
            allowNull : false
        }, 
    }

    const config = {
        tableName : 'measures',
        timestamps : false
    }

    const Measure = sequelize.define(alias, cols, config)
    return Measure
}