'use strict';
const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        async updateLastDateAcess() {

            this.last_date_acess = new Date();
            await this.save();
        }

        static associate(models) {
            this.belongsTo(models.UserType, {foreignKey: 'user_types_id', as: 'user_type'})
        }
    }

    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        cpf: {type: DataTypes.STRING, allowNull: false},
        email: DataTypes.STRING,
        image: {type: DataTypes.STRING, allowNull: true},
        user_types_id: {
            type: DataTypes.UUID,
            defaultValue: '3ba853b1-febc-4d4c-8531-df3daecc9d17'
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        last_date_acess: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'User',
    });

    return User;
};
