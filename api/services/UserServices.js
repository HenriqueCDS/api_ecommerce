const Services = require('./Services')
const database = require('../models')

class UserServices extends Services {
  constructor(){
    super('User')//nome do modelo, recebendo por aq 
  }
}

module.exports = UserServices