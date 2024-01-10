const { Usuarioservices } = require('../Services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt  = require('bcrypt')

const UserServiço = new Usuarioservices()

class UserController {
  static async pegaTodosOsUser(req, res){  
 
    try {
      const TodosOsUser = await UserServiço.pegaTodosOsRegistros()
      return res.status(200).json(TodosOsUser) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUser(req, res) {  
    const { id } = req.params
    try {
      const User = await UserServiço.pegaUmRegistro({ id })
      return res.status(200).json(User)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaUser(req, res) {  
    const novoUserCriado = req.body
    try {
      const hashPassword = await bcrypt.hash(novoUserCriado.senha, 10)
      novoUserCriado.senha = hashPassword
      const usuarioCriado = await UserServiço.criaRegistro(novoUserCriado)
      return res.status(200).json(usuarioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaUser(req, res) {  
    const { id } = req.params
    const novasInfos = req.body
    try {
      await UserServiço.atualizaRegistro(novasInfos, id)
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaUser(req, res) {  
    const { id } = req.params
    try {
      await UserServiço.apagaRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async restauraUser(req, res) {  
    const { id } = req.params
    try {
      await UserServiço.restauraRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController