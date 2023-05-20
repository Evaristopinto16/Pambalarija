//carregandos os modules
const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")
const app = express()
const router = require("./router/router")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
//configurando o tamplate handlebars

app.engine('handlebars', handlebars.engine({defaultLayout: "main"})) 
app.set('view engine', 'handlebars')
 

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://evaristo16:7jFewDqubCpZsv8l@teste2.5nqpyvr.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("conectado ao banco de dados")
}).catch((err)=>{
    console.log("erro ao conectar ao banco de dados"+err)
})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//bootstrap config
app.use(express.static( __dirname, +'/public'))


app.use(router)

module.exports = app
 