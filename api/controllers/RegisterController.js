const { RegisterServices } = require('../services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');

const RegisterServiço = new RegisterServices()

class RegisterController {
  static async pegaTodosOsRegister(req, res){  
 
    try {
      const TodosOsRegister = await RegisterServiço.pegaTodosOsRegistros()
      return res.status(200).json(TodosOsRegister) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaRegister(req, res) {  
    const { id } = req.params
    try {
      const Register = await RegisterServiço.pegaUmRegistro({ id })
      return res.status(200).json(Register)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaRegister(req, res) {  
    
    try {
      var novoRegisterCriado = req.body
      novoRegisterCriado.password = (bcrypt.hashSync(novoRegisterCriado.password, 10));
      
      const vericarEmails = await RegisterServiço.pegaTodosOsRegistros({ email: novoRegisterCriado.email })

      console.log(vericarEmails.length );
      if(vericarEmails.length > 0){
        return res.status(500).json({mensagem: `esse email: ${novoRegisterCriado.email} ja existe`})
      }
      
      novoRegisterCriado = await RegisterServiço.criaRegistro(novoRegisterCriado)
      return res.status(200).json(novoRegisterCriado)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  static async atualizaRegister(req, res) {  
    const { id } = req.params
    const novasInfos = req.body
    try {
      await RegisterServiço.atualizaRegistro(novasInfos, id)
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaRegister(req, res) {  
    const { id } = req.params
    try {
      await RegisterServiço.apagaRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async restauraRegister(req, res) {  
    const { id } = req.params
    try {
      await RegisterServiço.restauraRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = RegisterController