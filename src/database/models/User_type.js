module.exports = (sequelize, dataTypes) => {
    let alias = 'User_type';
    let cols = {
        id_user_type: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100)
        },
        key: {
            type: dataTypes.STRING(100)
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
    };
    let config = {
        tableName: 'users_types',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
        timestamps : true
    };
    const User_type = sequelize.define(alias, cols, config)

    User_type.associate = (models) => {
        User_type.hasMany(models.User, {
            as: "users",
            foreignKey: "id_user_type"
        })
    }

    return User_type
}