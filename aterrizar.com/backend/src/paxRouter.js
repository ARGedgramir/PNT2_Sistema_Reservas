const express = require('express')
const _ = require('lodash')
const paxDAO = require('./paxDAO_SQL')
const reservasDAO = require('./reservasDAO_SQL')
const router = express.Router()
const funciones = require('./funciones')
const baseURI = '/api/pax'


router.post('/PAX', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)
    console.log("Esto es / insertarPax")
    try {
        const reserva = await reservasDAO.getreserva(req.query)
        if (!isNaN(reserva))
        throw { status: 400, descripcion: 'La Reserva no Existente'}
        //Validar cantidad de PAX para la Reserva
        const cantPax = await reservasDAO.getcantPax(req.query)
        if (reserva[0].cant_pax == cantPax[0][""])
        throw { status: 400, descripcion: 'La Reserva no acepta mas PAX'}
        
        //Validar PAX Existente
        const PAX = await paxDAO.getPax(req.query)
        if (isNaN(PAX))
        throw { status: 402, descripcion: 'El PAX ya existe'}
        //Validar formato PAX
        if(funciones.validarPax(req.query))
        throw{ status: 401, descripcion: 'El Pasajero posee un formato invalido o faltan datos'}
        //Agregar PAX     
        await paxDAO.insertPax(req.query   )
        cantPax[0][""]++
        //Cerrar reserva
        if (reserva[0].cant_pax == cantPax[0][""])
        throw funciones.cerrarReserva(req.query,res)
        res.status(200).json()
    } catch (err) {
        res.status(err.status).json(err)
    }
})  


module.exports = router