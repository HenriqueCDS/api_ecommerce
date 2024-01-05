const Services = require('./Services')
const database = require('../models')

class Usuarioservices extends Services {
  constructor(){
    super('Usuarios')//nome do modelo, recebendo por aq 
  }
}

module.exports = Usuarioservices