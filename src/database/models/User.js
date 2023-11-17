'use strict';
const {Sequelize} = require('sequelize');
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        async updateGoogleId(googleId) {

            this.googleId = googleId;
            await this.save();
        }

        async updateLastDateAcess() {

            this.last_date_acess = new Date();
            await this.save();
        }

        static associate(models) {
            this.belongsTo(models.UserType, {foreignKey: 'user_types_id', as: 'user_type'})
        }
    }

    User.init({
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        ra: {type: DataTypes.STRING, allowNull: true},
        email: DataTypes.STRING,
        image: {type: DataTypes.STRING, allowNull: true},
        user_types_id: DataTypes.INTEGER,
        googleId: DataTypes.STRING,
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
