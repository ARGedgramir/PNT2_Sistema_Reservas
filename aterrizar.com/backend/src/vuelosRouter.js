const express = require('express')
const _ = require('lodash')
const vuelosDAO = require('./vuelosDAO_SQL')
const router = express.Router()
const baseURI = '/api/vuelos'

router.get('/Orig/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)

    try{
        if (_.isEmpty(req.query)) {
            const resultado = await vuelosDAO.getOrig()
            res.status(200).json(resultado)
        }else   res.status(400).json("Error al Recibir aeropuertos de Origen")
    }catch(e){
        return e
    }
})
router.get('/Dest/', async (req, res) => {

   try{
        if (_.isEmpty(req.query)) {
            const resultado = await vuelosDAO.getDest()
            res.status(200).json(resultado)
        }else   res.status(400).json("Error al Recibir aeropuertos de Destino")
    }catch(e){
        return e
    }
})

router.get('/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getvuelo")
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const resultado = await vuelosDAO.getvuelo(req.query)
        res.status(200).json(resultado) 
    }catch(e){
        return e
    }
})

router.get('/all/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getvueloall")
    try{
        const resultado = await vuelosDAO.getVueloall()
        res.status(200).json(resultado)       
    }catch(e){
        res.json(e)
    }
})
    


module.exports = router