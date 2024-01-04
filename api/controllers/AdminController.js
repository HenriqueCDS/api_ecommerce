const { AdminServices } = require('../services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const AdminServiço = new AdminServices()

class AdminController {
  static async pegaTodosOsAdmin(req, res){  
 
    try {
      const TodosOsAdmin = await AdminServiço.pegaTodosOsRegistros()
      return res.status(200).json(TodosOsAdmin) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaAdmin(req, res) {  
    const { id } = req.params
    try {
      const admin = await AdminServiço.pegaUmRegistro({ id })
      return res.status(200).json(admin)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaAdmin(req, res) {  
    var novoAdminCriado = req.body;
    try {
      novoAdminCriado = await AdminServiço.criaRegistro(novoAdminCriado)
      return res.status(200).json(novoAdminCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaAdmin(req, res) {  
    const { id } = req.params
    const novasInfos = req.body
    try {
      await AdminServiço.atualizaRegistro(novasInfos, id)
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaAdmin(req, res) {  
    const { id } = req.params
    try {
      await AdminServiço.apagaRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async restauraAdmin(req, res) {  
    const { id } = req.params
    try {
      await AdminServiço.restauraRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = AdminController