const Services = require('./Services')
const database = require('../models')

class Enderecoservices extends Services {
  constructor(){
    super('Enderecos')//nome do modelo, recebendo por aq 
  }
}

module.exports = Enderecoservices