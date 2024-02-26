module.exports = (sequelize, dataTypes) =>{
    const alias = 'User_Types'
    const cols = {
        id_user_type : {
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
        tableName : 'user_Types',
        timestamps : false
    }

    const User_Types = sequelize.define(alias, cols, config)
    return User_Types
}