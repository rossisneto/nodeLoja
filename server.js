//Configurando arquivo .env
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

//Importando conexão BD
require('./config/db').connect()

//Inicializando express
const express= require('express')
const app=express()

//Acesso pasta public
app.use(express.static('public'))

//View engine
app.set('view engine', 'ejs')

//Preparando as rotas
const indexRouter = require('./routes/index')

//Rota principal
app.use('/',indexRouter)


//Inicializando o servidor:
app.listen(process.env.PORT || 3000, console.log("Servidor em execução"))
