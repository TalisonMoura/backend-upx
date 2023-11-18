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
    }
  }
  Diagnostico.init({
    id: DataTypes.INTEGER,
    ativoId: DataTypes.INTEGER,
    report: DataTypes.STRING(2000),
    materials: DataTypes.STRING(2000),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Diagnostico',
  });
  return Diagnostico;
};