const LoginServices = require('../Services')

const jwt = require('jsonwebtoken')
async function authMiddleware (req, res, next){
    const { authorization } = req.headers // é indicado que o token seja enviado dentro de um header

        if(!authorization){
            return res.status(401).json("Nao autorizado")
        }
        const token = authorization.split(' ')[1]
        const {id} = jwt.verify(token, process.env.JWT_PASS ?? '') // caso n exista o jwt, fica uma string vazia

        const usuarioLogado = await LoginServices.pegaUmRegistro({id})   
        if(!usuarioLogado){
            return res.status(401).json("Nao autorizado")
        }

        req.user = usuarioLogado

        next()
}
module.exports = authMiddleware