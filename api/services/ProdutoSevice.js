const Services = require('./Services')
const database = require('../models')

class Produtoservices extends Services {
  constructor(){
    super('Produtos')//nome do modelo, recebendo por aq 
  }

  async pegaProdutosEimegem(where = {}){
    return database.imagens_carrossels.findAll({where: { ...where },include:[{ model:database.Produtos, require:true}]  })
  }

}


module.exports = Produtoservices