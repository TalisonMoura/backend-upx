'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ativo extends Model {
    static associate(models) {
    }
  }
  Ativo.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    numserie: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    tipo: DataTypes.STRING,
    model: DataTypes.STRING,
    manufacturingDate: DataTypes.DATE,
    department: DataTypes.STRING,
    location: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Ativo',
  });
  return Ativo;
};