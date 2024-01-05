'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endereço = sequelize.define('Enderecos', {
    cep: DataTypes.STRING,
    longradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {});
  Endereço.associate = function(models) {
      // define association here
  };
  return Endereço;
};