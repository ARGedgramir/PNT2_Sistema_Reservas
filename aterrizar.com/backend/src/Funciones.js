var nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const Joi = require('@hapi/joi')
const vuelosDAO = require('./vuelosDAO_SQL')
const reservasDAO = require('./reservasDAO_SQL')
const paxDAO = require('./paxDAO_SQL')

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


async function procesarReserva(query) {
    try{
        //Validar Reserva Existente
        const busqReserva = await reservasDAO.getreserva(query.id_reserva)
        if (isNaN(busqReserva)) throw { status: 400, descripcion: 'Reserva Existente'}
        //Validar contenido de la Reserva
        if(validarReserva(query)) 
        throw{ status: 400, descripcion: 'La Reserva posee un formato invalido o faltan datos'}   
        //Agregar Reserva
        const generarreserva = await reservasDAO.nuevaReserva(query)
        if (generarreserva)
            throw { status: 401, descripcion: 'Error al generar reservas' }

        //Agregar PAX     
        const crearPAX = await paxDAO.insertPax(query)
        if (crearPAX)
            throw { status: 402, descripcion: 'Error al crear Pasajero'}

        // actualizar vuelo
        const cantPax = await reservasDAO.getcantPax(query)
        //Cerrar reserva 
        const actualizacionVuelo = await actualizarVuelo(query.cant_pax,query.id_vue)
        if(actualizacionVuelo==null) throw{status:404, Message: "Error al actualizar reserva"}
        if (query.cant_pax == cantPax ){const cerrarReserva = await cerrarReservas(query)
           if(!cerrarReserva) throw  {status:403,message:"error al cerrar la Reserva"}
            return {status: 200,message:"Reserva Cerrada"}
        } throw { status: 204, descripcion: 'Pasajero Agregado'}    
    }catch(e){
        return e  
    }
}

async function cerrarReservas(query) {
    
    try{
        var smtpTransport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: "tp.sitiosvip",
                pass: "PaSSword123"
            }
        });
        const mail = await reservasDAO.getreserva(query.id_reserva)
        const rtoDetalle = await reservasDAO.detallesreserva(query.id_reserva)
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

async function actualizarVuelo(totpax,id_vue)  {
    try {   
        const actuVuelo = await vuelosDAO.updateVuelo(totpax,id_vue)
        return actuVuelo
    } catch (e){ 
    return e
    }
}


module.exports = {
    validarReserva,
    validarPax,
    procesarReserva,
    cerrarReservas
}