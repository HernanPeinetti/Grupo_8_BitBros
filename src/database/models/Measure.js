module.exports = (sequelize, dataTypes) => {
    const alias = 'Measure'
    const cols = {
        id_measure: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            AutoIncrement: true
        },
        height: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        length: {
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
        width: {
            type: dataTypes.DECIMAL.UNSIGNED,
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
        tableName: 'measures',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        timestamps : true
    }

    const Measure = sequelize.define(alias, cols, config)
    return Measure
}