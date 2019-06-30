const express = require('express')
const _ = require('lodash')
const router = express.Router()
const funciones = require('./funciones')
const reservasDAO = require('./reservasDAO_SQL')
const baseURI = '/api/reservas'

router.post('/nuevaReserva', async (req, res) => {
    try {
        console.log(req.query);
        const nuevaReserva = await funciones.procesarReserva(req.query,res)
        console.log(nuevaReserva)
        res.json(nuevaReserva)
    } catch (e) {
        res.status(e.status).json(e)
    }
}) 

router.get('/all', async (req, res) => {
    try {   
  //    Validar reserva existente
        const busqReserva = await reservasDAO.getreservasAll()
        res.status(200).json(busqReserva)
    } catch (err) {
        res.status(err.status).json(err)
    }
})
router.get('/:id_reserva', async (req, res) => {

    try {   
  //    Validar reserva existente
        const busqReserva = await reservasDAO.getreserva(req.params.id_reserva)
        if (!isNaN(busqReserva))
            throw { status: 404, descripcion: 'Reserva invalida'}
  //    Buscar detalles de Reserva      
        const detalleReserva = await reservasDAO.detallesreserva(req.params.id_reserva)
        res.status(200).json(detalleReserva)
    } catch (err) {
        res.status(err.status).json(err)
   
    }
})

module.exports = router
