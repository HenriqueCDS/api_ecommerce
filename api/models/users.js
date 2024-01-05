'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'dado do tipo email invalidos'
        }
      }
    },
    PrimeiroNome: DataTypes.STRING,
    SobreNome: DataTypes.STRING,
    password: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    isAdmin: DataTypes.BOOLEAN,
    registerDate: DataTypes.STRING,
    endereco_id:DataTypes.INTEGER
  }, {});
  Usuarios.associate = function(models) {
    Usuarios.belongsTo(models.Enderecos, {
      foreignKey: 'endereco_id',
      onDelete: 'CASCADE',
    })
  };
  return Usuarios;
};