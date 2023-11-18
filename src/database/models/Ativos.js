'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ativos extends Model {
    static associate(models) {
    }
  }
  Ativos.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    numserie: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    tipo: DataTypes.STRING,
    model: DataTypes.STRING,
    manufacturingdate: DataTypes.DATE,
    department: DataTypes.STRING,
    location: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Ativos',
  });
  return Ativos;
};