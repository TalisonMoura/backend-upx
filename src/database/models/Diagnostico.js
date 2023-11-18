'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnostico extends Model {
    static associate(models) {
      Diagnostico.belongsTo(models.Ativo, {
        foreignKey: 'ativoId',
        as: 'ativo'
      });
      Manutencao.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Diagnostico.init({
    id: DataTypes.INTEGER,
    ativoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    report: DataTypes.STRING,
    materials: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Diagnostico',
  });
  return Diagnostico;
};