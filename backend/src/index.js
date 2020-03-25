const express = require("express")
const routes = require("./routes")
const cors = require('cors')
const app = express()
 
app.use(cors())
app.use(express.json()) 
app.use(routes)

app.listen(3333)


/**
 * Entidades:
 *      - ONG
 *      - INCIDENTS
 * Funcionalidades:
 *      - Cadastrar
 *      - Login de ONG
 *      - Logout de ONG
 *      - Cadastrar novos casos
 *      - Deletar casos
 *      - Listar casos
 *      - Entrar em contato com a ONG
 */