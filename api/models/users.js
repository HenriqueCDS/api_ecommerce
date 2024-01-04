'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'dado do tipo email invalidos'
        }
      }
    },
    fistName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    isAdmin: DataTypes.BOOLEAN,
    registerDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};