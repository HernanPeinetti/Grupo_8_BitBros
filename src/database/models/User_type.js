module.exports = (sequelize, dataTypes) => {
    let alias = 'User_type';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100)
        }
    };
    let config = {
        tableName: 'users_types',
        timestamps: false
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