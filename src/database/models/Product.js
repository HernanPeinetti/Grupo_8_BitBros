module.exports = (sequelize, dataTypes) =>{
    const alias = 'Product'
    const cols = {
        id_user : {
            type : dataTypes.STRING(50),
            primaryKey : true,
            AutoIncrement : true
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull : false
        },
        image : {
            type : dataTypes.STRING(50)
        },
        price : {
            type : dataTypes.STRING(50),
            allowNull : false
        },
        stock : {
            type : dataTypes.STRING(50),
            allowNull : false
        }, 
        description : {
            type : dataTypes.STRING(50),
        }, 
        id_category : {
            type : dataTypes.INTEGER.UNSIGNED
        }, 
        id_brand : {
            type : dataTypes.INTEGER.UNSIGNED
        }, 
        id_measure : {
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
        timestamps : true
    }

    const Product = sequelize.define(alias, cols, config)
    return Product


}