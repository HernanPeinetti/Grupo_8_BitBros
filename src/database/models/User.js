module.exports = (sequelize, dataTypes) =>{
    const alias = 'User'
    const cols = {
        id_user : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true
        }, 
        email : {
            type : dataTypes.STRING(50),
            allowNull : false
        },
        name : {
            type : dataTypes.STRING,
            allowNull : false
        }, 
        password : {
            type : dataTypes.STRING(100),
            allowNull : false
        }, 
        birth : {
            type : dataTypes.DATE,
            allowNull : false
        },
        profile_img : {
            type : dataTypes.STRING(100)
        }, 
        id_user_type : {
            type : dataTypes.INTEGER.UNSIGNED
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
        tableName : 'users',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        paranoid: true,
        timestamps : true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.belongsTo(models.User_type, {
            as: "user_type",
            foreignKey: "id_user_type"
        })
    }

    return User
}