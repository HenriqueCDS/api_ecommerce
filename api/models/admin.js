'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    AdminNome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'dado do tipo email invalidos'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
    paranoid: true,
    defaultScope:{ 
      where:{ ativo:true } }
   , scopes: {
    todos:{ where:{}  },
    //etc:{ where:{}  }
   },
  });
  return Admin;
};