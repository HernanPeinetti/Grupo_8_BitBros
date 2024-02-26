module.exports = (sequelize, dataTypes) =>{
    const alias = 'User'
    const cols = {
        birth : {
            type : dataTypes.DATE,
            allowNull : false
        },
        created_at : {
            type : dataTypes.DATE
        },
        deleted_at : {
            type : dataTypes.DATE
        },
        email : {
            type : dataTypes.STRING(50),
            allowNull : false
        }, 
        id_user : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true
        }, 
        id_user_type : {
            type : dataTypes.INTEGER.UNSIGNED
        }, 
        name : {
            type : dataTypes.STRING,
            allowNull : false
        }, 
        password : {
            type : dataTypes.STRING(100),
            allowNull : false
        }, 
        profileImg : {
            type : dataTypes.STRING(100)
        }, 
        updated_at : {
            type : dataTypes.DATE
        }
    }
    const config = {
        tableName : 'users',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        timestamps : true
    }

    const User = sequelize.define(alias, cols, config)
    return User


}