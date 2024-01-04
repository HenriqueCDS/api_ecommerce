
const Admin = require('./adminRoute')
const Register = require('./registerRoute')
const User = require('./userRoute')
const bodyParser = require('body-parser')
 

module.exports = app => {
  app.use(
    bodyParser.json(),
    Admin,
    Register,
    User
   
  )
}