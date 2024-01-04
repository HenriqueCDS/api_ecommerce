'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Register.init({
    email: DataTypes.STRING,
    fistName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    registerDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};