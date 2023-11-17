'use strict';
const {
    Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserType extends Model {

        static associate(models) {

            this.hasMany(models.User, {
                foreignKey: 'user_types_id',
                as: 'users'
            })
        }
    }

    UserType.init({
        description: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    }, {
        sequelize,
        modelName: 'UserType',
    });
    return UserType;
};