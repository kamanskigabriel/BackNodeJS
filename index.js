import express from 'express'
import database from './config/database.js'
import cliente from './router/clientes.js'
import atendimento from './router/atendimento.js'

const app = express()

app.use(express.json())

app.use("/api/v1/cliente", cliente)
app.use("/api/v1/atendimento", atendimento)

database.db.sync({ force: false }).then((_) => {
    app.listen(3000, () => {
        console.log("Servidor na porta 3000")
    })
})
    .catch((e) => {
        console.log(e)
    })