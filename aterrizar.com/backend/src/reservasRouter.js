const express = require('express')
const _ = require('lodash')
const router = express.Router()
const funciones = require('./funciones')
const reservasDAO = require('./reservasDAO_SQL')
const baseURI = '/api/reservas'

router.post('/nuevaReserva', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)
    console.log("Esto es / nuevaReserva")
    try {   
        const nuevaReserva = await funciones.procesarReserva(req.query,res)
        console.log(nuevaReserva)
        res.json(nuevaReserva)
    } catch (e) {
        res.status(e.status).json(e)
    }
})

router.get('/Mostrarreservas/all', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)
    console.log("Esto es / MostrarReservaAll")
    try {   
  //    Validar reserva existente
        const busqReserva = await reservasDAO.getreservasAll()
        res.status(200).json(busqReserva)
    
    } catch (err) {
        res.status(err.status).json(err)
    }
})
router.get('/Mostrarreservas/:id_reserva', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)
    console.log("Esto es / MostrarReserva")
    try {   
  //    Validar reserva existente
        const busqReserva = await reservasDAO.getreserva(req.params.id_reserva)
        if (!isNaN(busqReserva))
            throw { status: 400, descripcion: 'Reserva invalida'}
  //    Buscar detalles de Reserva      
        const detalleReserva = await reservasDAO.detallesreserva(req.params.id_reserva)
        res.status(200).json(detalleReserva)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

module.exports = router
