const { LoginServices } = require('../Services')
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const Sequelize = require('sequelize')


const jwt = require('jsonwebtoken')
const bcrypt  = require('bcrypt')

const authMiddlewares = new AuthMiddleware()
const LoginService = new LoginServices()


class LoginController{

    static async verificaLogin(req, res){
        try {
            const {email, senha} = req.body
            // verifica se existe o email
            const usuario = await LoginService.verificaEmail({email})
            console.log()
            
            if(!usuario){
                return res.status(400).json({
                    msg: "Email inválido. Por favor, certifique-se de que a senha inserida está correta e tente novamente. ",
                    
                })
            }
            const verificaSenha = await bcrypt.compare(senha, usuario.senha)

         
            if(!verificaSenha){
                return res.status(400).json({
                    msg: "Senha inválida. Por favor, certifique-se de que a senha inserida está correta e tente novamente. ",
                    
                })
            }

          
            const token = jwt.sign({ id:usuario.id, email:email, nome:usuario.primeiroNome }, process.env.JWT_PASS ?? '', {expiresIn: '8h'} ) // esse jwt deve ser mudado, ele é a senha que deixa o user logado

            const {senha:_ , ...usuarioLogin} = usuario // tirando a senha do json do usuario, para n retornar no json
            return res.status(200).json({
                user: usuario,
                token:token,
               
            })
            
            
        } catch (error) {
            console.log('erro',error)
            
        }
    }

    static async getProfile(req, res) {
        
        return res.status(200).json(req.user)
    }
}

module.exports = LoginController