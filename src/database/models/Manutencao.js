'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manutencao extends Model {
    static associate(models) {
      Manutencao.belongsTo(models.Ativo, {
        foreignKey: 'ativoId',
        as: 'ativo' 
      });
      Manutencao.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Manutencao.init({
    id: DataTypes.INTEGER,
    ativoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    report: DataTypes.STRING,
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
    modelName: 'Manutencao',
  });
  return Manutencao;
};