const Services = require('./Services')
const database = require('../models')

class Produtoservices extends Services {
  constructor(){
    super('Produtos')//nome do modelo, recebendo por aq 
  }
}

module.exports = Produtoservices