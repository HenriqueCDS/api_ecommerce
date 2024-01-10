const { Produtoservices } = require('../services');
const { imagensCarrosselservices } = require('../services');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const ProdutoServico = new  Produtoservices();
const imagensCarrosselServico = new  imagensCarrosselservices();

class ProdutoController {
    static async pegaTodosOsProduto(req, res){  
   
      try {
        const TodosOsUser = await ProdutoServico.pegaTodosOsRegistros()
    
        return res.status(200).json(TodosOsUser) 
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async pegaProduto(req, res) {  
      const { id } = req.params
      try {
        const User = await ProdutoServico.pegaUmRegistro({ id })
        return res.status(200).json(User)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async criaProduto(req, res) {  
      const novoUserCriado = req.body
      try {
        const usuarioCriado = await ProdutoServico.criaRegistro(novoUserCriado)
        console.log(usuarioCriado)
        return res.status(200).json(usuarioCriado)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaProduto(req, res) {  
      const { id } = req.params
      const novasInfos = req.body
      try {
        await ProdutoServico.atualizaRegistro(novasInfos, id)
        return res.status(200).json({ mensagem: `id ${id} atualizado` })
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async apagaProduto(req, res) {  
      const { id } = req.params
      try {
        await ProdutoServico.apagaRegistro(id)
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
  
    static async restauraProduto(req, res) {  
      const { id } = req.params
      try {
        await ProdutoServico.restauraRegistro(id)
        return res.status(200).json({ mensagem: `id ${id} restaurado` })
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  }
  
  module.exports = ProdutoController