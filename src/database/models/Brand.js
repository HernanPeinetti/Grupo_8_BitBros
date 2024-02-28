module.exports = (sequelize, dataTypes) => {
    const alias = 'Brand'
    const cols = {
        id_brand: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            AutoIncrement: true,
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
        timestamps : true
    }

    const Brand = sequelize.define(alias, cols, config)
    return Brand
}