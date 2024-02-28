module.exports = (sequelize, dataTypes) =>{
    const alias = 'Product'
    const cols = {
        id_product : {
            type : dataTypes.STRING(50),
            primaryKey : true,
            autoIncrement : true
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
        tableName : 'products',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        timestamps : true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "id_brand"
        }),
        
        Product.belongsToMany(models.Color, {
            as: "colors",
            through: "products_colors",
            foreignKey: "id_product",
            otherKey: "id_color",
            timestamps: false
        })
    }

    return Product


}