const { LoginServices } = require('../Services')

const jwt = require('jsonwebtoken')

const LoginService = new LoginServices()

class AuthMiddleware{
    static async autentifica(req, res, next){
        console.log('chamou func')
        const { authorization } = req.headers // é indicado que o token seja enviado dentro de um header
    
            if(!authorization){
                return res.status(401).json("Nao autorizado")
            }
            const token = authorization.split(' ')[1]
            const {id} = jwt.verify(token, process.env.JWT_PASS ?? '') // caso n exista o jwt, fica uma string vazia
    
            const usuarioLogado = await LoginService.pegaUmRegistro({id})   
            if(!usuarioLogado){
                return res.status(401).json("Nao autorizado")
            }
            
    
            req.user = usuarioLogado
    
            next()
    }

}
module.exports = AuthMiddleware
