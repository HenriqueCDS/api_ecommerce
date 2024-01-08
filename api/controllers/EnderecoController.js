const { Enderecoservices } = require('../services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const EnderecoServico = new  Enderecoservices();

class EnderecosController {
    static async pegaTodosOsEnderecos(req, res){  
   
      try {
        const TodosOsUser = await EnderecoServico.pegaTodosOsRegistros()
        return res.status(200).json(TodosOsUser) 
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async pegaEndereco(req, res) {  
      const { id } = req.params
      try {
        const User = await EnderecoServico.pegaUmRegistro({ id })
        return res.status(200).json(User)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async criaEndereco(req, res) {  
      const novoUserCriado = req.body
      try {
        const usuarioCriado = await EnderecoServico.criaRegistro(novoUserCriado)
        console.log(usuarioCriado)
        return res.status(200).json(usuarioCriado)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaEndereco(req, res) {  
      const { id } = req.params
      const novasInfos = req.body
      try {
        await EnderecoServico.atualizaRegistro(novasInfos, id)
        return res.status(200).json({ mensagem: `id ${id} atualizado` })
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async apagaEndereco(req, res) {  
      const { id } = req.params
      try {
        await EnderecoServico.apagaRegistro(id)
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
  
    static async restauraEndereco(req, res) {  
      const { id } = req.params
      try {
        await EnderecoServico.restauraRegistro(id)
        return res.status(200).json({ mensagem: `id ${id} restaurado` })
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  }
  
  module.exports = EnderecosController