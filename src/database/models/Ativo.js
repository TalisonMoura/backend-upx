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
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    numserie: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    tipo: DataTypes.STRING,
    model: DataTypes.STRING,
    department: DataTypes.STRING,
    location: DataTypes.STRING,
    manufacturingDate: DataTypes.DATE,
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
    modelName: 'Ativo',
  });
  return Ativo;
};