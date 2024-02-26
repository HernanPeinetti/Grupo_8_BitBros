module.exports = (sequelize, dataTypes) =>{
    const alias = 'Categorie'
    const cols = {
        id_category : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(200),
            allowNull : false
        }
    }
    const config = {
        tableName : 'categories',
        timestamps : false
    }

    const Categorie = sequelize.define(alias, cols, config)
    return Categorie

}