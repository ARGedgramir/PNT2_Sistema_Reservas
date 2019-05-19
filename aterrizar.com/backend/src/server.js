const express = require('express')
const vuelosRouter = require('./vuelosRouter')

const app = express()

app.use(express.json())

app.set('json spaces', 4)

app.use('/api/vuelos', vuelosRouter)

const puerto = 8080
app.listen(puerto, () => {
    console.log(`servidor inicializado en puerto ${puerto}`)
})
