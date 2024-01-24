const express = require('express')
const routes = require('./routes')

const cors = require("cors");
require("dotenv").config();

const app = express()
const port = 4000

app.use((req, res, next) => {
  //enderecos que pode ser feira a requisicao
  res.header("Access-Control-Allow-Origin", "*");
  
  // tipos de métodos que a API aceita
  res.header("Access-Control-Allow-Methods", "*");
  //permitir o envio de dados para API
  res.header("Access-Control-Allow-Headers", "*")
  //executa o cors
  app.use(cors());
  //quando nao houver erro deve continuar o processamento
  next();

});

routes(app)




app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))


module.exports = app