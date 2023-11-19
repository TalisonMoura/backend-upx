'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnostico extends Model {
    static associate(models) {
      Diagnostico.belongsTo(models.Ativo, {
        foreignKey: 'ativoId',
        as: 'ativo'
      });
      Diagnostico.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Diagnostico.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ativoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    report: DataTypes.STRING,
    materials: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Diagnostico',
  });
  return Diagnostico;
};