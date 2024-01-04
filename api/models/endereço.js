'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endereço = sequelize.define('Endereco', {
    cep: DataTypes.STRING,
    longradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {});
  Endereço.associate = function(models) {
    // associations can be defined here
  };
  return Endereço;
};