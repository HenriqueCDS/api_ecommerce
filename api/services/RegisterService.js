const Services = require('./Services')
const database = require('../models')

class RegisterServices extends Services {
  constructor(){
    super('Register')//nome do modelo, recebendo por aq 
  }
}

module.exports = RegisterServices