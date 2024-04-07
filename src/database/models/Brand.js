module.exports = (sequelize, dataTypes) => {
    const alias = 'Brand'
    const cols = {
        id_brand: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }
    const config = {
        tableName: 'brands',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        paranoid: true,
        timestamps : true
    }

    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_brand"
        })
    }

    return Brand
}