const express = require('express')
const _ = require('lodash')
const Joi = require('@hapi/joi')
const vuelosDAO = require('./vuelosDAO_SQL')

const router = express.Router()

const baseURI = '/api/vuelos'


router.get('/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getall")
    if (_.isEmpty(req.query)) {
        _handleGetAll(req, res)
    } else {
//        _handleGetWithQS(req, res)
    }
})

async function _handleGetAll(req, res) {
    try {
        const result = await vuelosDAO.getAll()
        res.json(result)
    } catch (err) {
    res.status(err.status).json(err)
    }
}
router.get('/Orig/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getOrig")
    try{
        if (_.isEmpty(req.query)) {
            const resultado = await vuelosDAO.getOrig(req)
            res.json(resultado)
        }else   console.log(res.query)
    }catch(e){
        return e
    }
})
router.get('/Dest/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getDest")
   try{
        if (_.isEmpty(req.query)) {
            const resultado = await vuelosDAO.getAll(req)
            res.json(resultado)
        }else   console.log(res.query)
    }catch(e){
        return e
    }
})

router.get('/vuelos', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getvuelo")
    try{
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "X-Requested-With")
        const resultado = await vuelosDAO.getvuelo(req)
        res.json(resultado) 
    }catch(e){
        return e
    }
})

router.get('/vuelos/all', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getvueloall")
    try{
        const resultado = await vuelosDAO.getvueloall()
        res.json(resultado)       
    }catch(e){
        res.json(e)
    }
})
    
router.get('/Dest/:vue_dest', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)
    console.log("Esto es / getDest")
    try{
        if (_.isEmpty(req.query)) {
            const resultado = await vuelosDAO.getDest(req)
            res.json(resultado)
            return res
        }else   console.log(res.query)
    }catch(e){
        return e
    }
})


router.post('/vuelo', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)    
    
    try {   
        const estuActualizado = await vuelosDAO.updateVuelo(req)
        res.json(estuActualizado)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

router.post('/PAX', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)
    try {   
  /*      const nuevo = req.body
        if (esPasajeroInvalido(nuevo))
        throw { status: 400, descripcion: 'el pasajero posee un formato invalido o faltan datos' }
*/
        const estuActualizado = await vuelosDAO.updatePax(req)
        res.json(estuActualizado)
    } catch (err) {
        res.status(err.status).json(err)
    }
})
router.post('/reserva', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)
    try {   
  /*      const nuevo = req.body
        if (esPasajeroInvalido(nuevo))
        throw { status: 400, descripcion: 'el pasajero posee un formato invalido o faltan datos' }
*/
        const estuActualizado = await vuelosDAO.reserva(req)
        res.json(estuActualizado)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

/*function esPasajeroInvalido(req) {
    const schema = { //crea una clase para el objeto estudiante
        id_reserva: Joi.string().alphanum().min(1).required(),
        DNI_pax: Joi.string().alphanum().min(1).required(),
        nombre_pax: Joi.string().alphanum().min(1).required(),
        apellido_pax: Joi.string().alphanum().min(1).required(),
    }
    const { error } = Joi.validate(req, schema); //las llaves significa agarro un objeto  y lo asigno a una definicion de un objeto.
    return error
}
*/
/*
async function _handleGetWithQS(req, res) {
    try {
        if (isNaN(req.query.edadMin) || isNaN(req.query.edadMax))
            throw { status: 400, descripcion: 'las edades provistas no son numéricas' }

        if (req.query.edadMin < 0 || req.query.edadMax < 0)
            throw { status: 400, descripcion: 'las edades provistas no son positivas' }

        const result = await vuelosDAO.getByAge(req.query.edadMin, req.query.edadMax)
        res.json(result)
    } catch (err) {
        res.status(err.status).json(err)
    }
}

router.get('/:dni', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`)

    try {
        if (isNaN(req.params.dni))
            throw { status: 400, descripcion: 'el dni provisto no es un número o es inválido' }

        const resultado = await vuelosDAO.getByDni(req.params.dni)

        if (!resultado)
            throw { status: 404, descripcion: 'estudiante no encontrado' }

        res.json(resultado)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

router.post('/', async (req, res) => {
    console.log(`POSTING: ${baseURI}${req.url}`)

    try {
        const nuevo = req.body

        if (esEstudianteInvalido(nuevo))
            throw { status: 400, descripcion: 'el estudiante posee un formato json invalido o faltan datos' }
        
        const estuCreado = await vuelosDAO.add(nuevo)
        res.status(201).json(estuCreado)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

router.delete('/:dni', async (req, res) => {
    console.log(`DELETING: ${baseURI}${req.url}`)

    try {
        if (isNaN(req.params.dni))
            throw { status: 400, descripcion: 'el dni provisto no es un número o es inválido' }

        await vuelosDAO.deleteByDni(req.params.dni)
        res.status(204).send()
    } catch (err) {
        res.status(err.status).json(err)
    }
})

router.put('/:dni', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`)

    try {
        if (isNaN(req.params.dni))
            throw { status: 400, descripcion: 'el dni provisto no es un número o es inválido' }

        const nuevo = req.body

        if (esEstudianteInvalido(nuevo))
            throw { status: 400, descripcion: 'el estudiante posee un formato json invalido o faltan datos' }

        if (req.params.dni != nuevo.dni)
            throw { status: 400, descripcion: 'el dni provisto no coincide entre el recurso buscado y el nuevo' }

        const estuActualizado = await vuelosDAO.updateByDni(req.params.dni, nuevo)
        res.json(estuActualizado)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

function esEstudianteInvalido(estudiante) {
    const schema = { //crea una clase para el objeto estudiante
        nombre: Joi.string().alphanum().min(1).required(),
        apellido: Joi.string().alphanum().min(1).required(),
        edad: Joi.number().integer().min(0).max(120).required(),
        dni: Joi.number().integer().min(1).max(99999999).required()
    }
    const { error } = Joi.validate(estudiante, schema); //las llaves significa agarro un objeto  y lo asigno a una definicion de un objeto.
    return error
}
*/
module.exports = router