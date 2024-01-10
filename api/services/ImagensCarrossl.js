const Services = require('./Services')
const database = require('../models')

class imagensCarrosselservices extends Services {
  constructor(){
    super('imagensCarrossel')//nome do modelo, recebendo por aq 
  }
}

module.exports = imagensCarrosselservices