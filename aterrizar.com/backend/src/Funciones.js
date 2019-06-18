var nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const Joi = require('@hapi/joi')
const vuelosDAO = require('./vuelosDAO_SQL')

function validarReserva(query) {
    const schema = { //crea una clase para el objeto reserva
        id_reserva: Joi.string().alphanum().min(1).required(),
        id_vue: Joi.string().alphanum().min(3).required(),
        fecha: Joi.string().min(2).max(99999999).required(),
        DNI_pax: Joi.string().alphanum().min(2).max(99999999).required(),
        cant_pax:Joi.string().alphanum().min(1).required(),
        telefono_pax: Joi.string().alphanum().min(1).required(),
        mail_pax: Joi.string().email({ minDomainSegments: 2 }),
        nombre_pax: Joi.string().alphanum().min(1).required(),
        apellido_pax: Joi.string().alphanum().min(1).required(),
    }
    const { error } = Joi.validate(query, schema); //las llaves significa agarro un objeto  y lo asigno a una definicion de un objeto.
    return error
}

function validarPax(query) {
    const schema = { //crea una clase para el objeto estudiante
        id_reserva: Joi.string().alphanum().min(1).required(),
        DNI_pax: Joi.string().alphanum().min(1).required(),
        nombre_pax: Joi.string().alphanum().min(1).required(),
        apellido_pax: Joi.string().alphanum().min(1).required(),
    }
    const { error } = Joi.validate(query, schema); //las llaves significa agarro un objeto  y lo asigno a una definicion de un objeto.
    return error
}

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "tp.sitiosvip",
        pass: "PaSSword123"
    }
});


async function cerrarReserva(query) {
    
    try{
        const actualizacionVuelo = await actualizarVuelo(query)
        if(actualizacionVuelo==null) throw{status:404, Message: "Error al actualizar reserva"}
        const mail = await vuelosDAO.getreserva(query)
        const rtoDetalle = await vuelosDAO.detallesreserva(query)
    
        const info = await smtpTransport.sendMail({
        from: '"Aterrizar.com " <info@aterrizar.com>', // sender address
        to: `${mail[0].mail_pax}`, // list of receivers
        subject: "Detalles de la Reserva", // Subject line
        html: `<b> '${rtoDetalle[0].nombre_pax}' </b>` // html body
      })
    return info
    }catch (e){
        return e
    }
}

async function actualizarVuelo(query)  {
    try {   
        const actuVuelo = await vuelosDAO.updateVuelo(query)
        return actuVuelo
    } catch (e){ 
    return e
    }
}

async function procesarReserva(query) {
    try{
        //Validar Reserva Existente
        let cerrarReserva
        const busqReserva = await vuelosDAO.getreserva(query)
        if (isNaN(busqReserva)) throw { status: 400, descripcion: 'Reserva Existente'}
        //Validar contenido de la Reserva
        if(validarReserva(query)) 
        throw{ status: 400, descripcion: 'La Reserva posee un formato invalido o faltan datos'}   
        //Agregar Reserva
        const nuevaReserva = await vuelosDAO.nuevaReserva(query)
        //Agregar PAX     
        const insertPax = await vuelosDAO.insertPax(query)      
        
        // actualizar vuelo

        const cantPax = await vuelosDAO.getcantPax(query)
        //Cerrar reserva
        if (nuevaReserva[0].cant_pax != cantPax[0][""] ) throw cerrarReserva = await cerrarReserva(query)
        cerrarReserva.status(200).Json("PAX Agregado")
        return cerrarReserva
    }catch(e){
        return e  
    }
}

module.exports = {
    validarReserva,
    validarPax,
    procesarReserva
}


/////////////////////////////FUNCIONES/////////////////////////////////////////

/*
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
validarPax(req.query)
function validarPax(reqquery) {
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