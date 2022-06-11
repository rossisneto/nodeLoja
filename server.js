//Configurando arquivo .env
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

//Importando conexão BD
require('./config/db').connect()

//Inicializando express
const express= require('express')
const app=express()

//Habilitando JSON
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())

//Acesso pasta public
app.use(express.static('public'))

//View engine
app.set('view engine', 'ejs')

//Configuração das rotas
const indexRouter = require('./routes/index')
const produtosRouter = require('./routes/produtos')

//Habilitação das Rotas
app.use('/',indexRouter)
app.use('/produtos',produtosRouter)

//Inicializando o servidor:
app.listen(process.env.PORT || 3000, console.log("Servidor em execução"))
