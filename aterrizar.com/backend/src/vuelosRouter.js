const express = require('express')
const _ = require('lodash')
const vuelosDAO = require('./vuelosDAO_SQL')
const router = express.Router()
const funciones = require('./funciones')
const baseURI = '/api/vuelos'

router.get('/Orig/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getOrig")
    try{
        if (_.isEmpty(req.query)) {
            const resultado = await vuelosDAO.getOrig(req)
            res.json(resultado)
        }else   res.status(400).json("Error al Recibir aeropuertos de Origen")
    }catch(e){
        return e
    }
})
router.get('/Dest/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getDest")
   try{
        if (_.isEmpty(req.query)) {
            const resultado = await vuelosDAO.getAll(req.params)
            res.json(resultado)
        }else   res.status(400).json("Error al Recibir aeropuertos de Destino")
    }catch(e){
        return e
    }
})

router.get('/vuelos', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getvuelo")
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const resultado = await vuelosDAO.getvuelo(req.query)
        res.json(resultado) 
    }catch(e){
        return e
    }
})

router.get('/all/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getvueloall")
    try{
        const resultado = await vuelosDAO.getVueloall()
        res.json(resultado)       
    }catch(e){
        res.json(e)
    }
})
    

router.post('/PAX', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)
    console.log("Esto es / insertarPax")
    try {
        const reserva = await vuelosDAO.getreserva(req.query)
        if (!isNaN(reserva))
        throw { status: 400, descripcion: 'La Reserva no Existente'}
        //Validar cantidad de PAX para la Reserva
        const cantPax = await vuelosDAO.getcantPax(req.query)
        if (reserva[0].cant_pax == cantPax[0][""])
        throw { status: 400, descripcion: 'La Reserva no acepta mas PAX'}
        
        //Validar PAX Existente
        const PAX = await vuelosDAO.getPax(req.query)
        if (isNaN(PAX))
        throw { status: 402, descripcion: 'El PAX ya existe'}
        //Validar formato PAX
        if(funciones.validarPax(req.query))
        throw{ status: 401, descripcion: 'El Pasajero posee un formato invalido o faltan datos'}
        //Agregar PAX     
        await vuelosDAO.insertPax(req.query   )
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