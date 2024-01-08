'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define('Produtos', {
    nome: DataTypes.STRING,
    img: DataTypes.STRING,
    preco: DataTypes.DOUBLE
  }, {});
  Produtos.associate = function(models) {
    // associations can be defined here
  };
  return Produtos;
};