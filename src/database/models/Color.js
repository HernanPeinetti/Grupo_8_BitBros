module.exports = (sequelize, dataTypes) => {
    const alias = 'Color'
    const cols = {
        id_color: {
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
        tableName: 'colors',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        timestamps : true
    }

    const Color = sequelize.define(alias, cols, config)

    return Color
}