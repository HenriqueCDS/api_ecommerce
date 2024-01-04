const { Usuarioservices } = require('../services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const Usuarioserviço = new Usuarioservices()

class UserController {
  static async pegaTodosOsUser(req, res){  
 
    try {
      const TodosOsUser = await Usuarioserviço.pegaTodosOsRegistros()
      return res.status(200).json(TodosOsUser) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUser(req, res) {  
    const { id } = req.params
    try {
      const User = await Usuarioserviço.pegaUmRegistro({ id })
      return res.status(200).json(User)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaUser(req, res) {  
    var novoUserCriado = req.body
    try {
      novoUserCriado = await Usuarioserviço.criaRegistro(novoUserCriado)
      return res.status(200).json(novoUserCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaUser(req, res) {  
    const { id } = req.params
    const novasInfos = req.body
    try {
      await Usuarioserviço.atualizaRegistro(novasInfos, id)
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaUser(req, res) {  
    const { id } = req.params
    try {
      await Usuarioserviço.apagaRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async restauraUser(req, res) {  
    const { id } = req.params
    try {
      await Usuarioserviço.restauraRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController