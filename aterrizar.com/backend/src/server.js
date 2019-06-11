const express = require('express')
const vuelosRouter = require('./vuelosRouter')
const emailRouter = require('./emailRouter')

const app = express()

app.use(express.json())

app.set('json spaces', 4)

app.use('/api/vuelos', vuelosRouter)
app.use('/api/email', emailRouter)

const puerto = 8090
const emailPort = 3000

app.listen(puerto, () => {
    console.log(`servidor inicializado en puerto ${puerto}`)
})

app.listen(emailPort, () => {
    console.log(`servidor de correo inicializado en puerto ${emailPort}`)
})
