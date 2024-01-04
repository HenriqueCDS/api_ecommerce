const Services = require('./Services')
const database = require('../models')

class AdminServices extends Services {
  constructor(){
    super('Admin')//nome do modelo, recebendo por aq 
  }
}

module.exports = AdminServices