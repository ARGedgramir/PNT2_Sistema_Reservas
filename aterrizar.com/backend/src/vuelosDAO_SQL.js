const knex = require('./db/knex')

const getOrig = async()=> {
    try{
        const aeropuertosOrigen = `SELECT * FROM vue_Orig`
        const result = await knex.raw(aeropuertosOrigen)
        return result
    }catch(e){
        return e
    }
}
const getDest = async(params)=> {
    try{
        const aeropuertosDestino = `SELECT * FROM vue_Dest where id_dest='${params.vue_dest}'`
        const result = await knex.raw(aeropuertosDestino)
        return result
    }catch(e){
        return e
    }
}
const getvuelo = async(query)=> {
    try{
        
            const busquedaVuelosUsuario = `
            SELECT v.id_vue,    v.aerolinea,v.orig,
            v.orig_aeropuerto,v.dest, v.dest_aeropuerto,v.fecha,v.escala_aeropuerto,v.disponible,vd.duracion,vd.hora_llegada,vd.hora_partida,vd.precio,vd.PaxDisp
             FROM vuelos  v inner join vuelos_detalle vd on v.id_vue=vd.id_vue
              where v.orig='${query.origen}'and v.dest='${query.destino}' and v.fecha='${query.fecha}' and vd.PaxDisp>'${query.cant_pax}'`
            let result = await knex.raw(busquedaVuelosUsuario)
        if(!isNaN(result)){
            let noEncontrado = "No encontrado"
            return noEncontrado}
        return result
    }catch(e){
        return e
    }
}

const getVuelodetalle = async(query)=> {
    try{
        const detalleVuelo = `SELECT paxDisp FROM vuelos_detalle where id_vue='${query.id_vue}'`
        const result = await knex.raw(detalleVuelo)
        return result
    }catch(e){
        return e
    }
}

const getVueloall = async()=> {
    try{
        const detalleVuelo = `SELECT * FROM vuelos`
        const result = await knex.raw(detalleVuelo)
        return result
    }catch(e){
        return e
    }
}

const updateVuelo = async(query)=> {
    try{
        const actualizarVuelo = `Update vuelos_detalle set paxdisp =  paxdisp -'${query.totpax}' where id_vue ='${query.id_vue}'`
        const result = await knex.raw(actualizarVuelo)
        return result.status(200)
    }catch(e){
        return e
    }
}
const insertPax = async(query)=> {
    try{
        const insertarPax  = `INSERT INTO PAX
        VALUES ('${query.id_reserva}',
        '${query.DNI_pax}',
        '${query.nombre_pax}',
        '${query.apellido_pax}')`
        const result = await knex.raw(insertarPax)

        return result.status(200)
    }catch(e){
        return e
    }
}
const nuevaReserva = async(query)=> {
    try{
        const insertarReserva = `INSERT INTO reserva
        VALUES ('${query.id_reserva}','${query.id_vue}', '${query.fecha}','${query.DNI_pax}','${query.cant_pax}',
        '${query.telefono_pax}','${query.mail_pax}')`
        const result = await knex.raw(insertarReserva)
        return result
    }catch(e){
        return e
    }
}
const getreserva = async(query)=> {
    try{
        console.log("getreserva")
        const busquedaReserva = `select * from reserva where id_reserva= '${query.id_reserva}'`
        const result = await knex.raw(busquedaReserva)
        return result
    }catch(e){
        return e    
    }
}
const getcantPax = async(query)=> {
    try{
        console.log("getcantPax")
        const cantPax = `select * from PAX where id_reserva= '${query.id_reserva}'`
        const result = await knex.raw(cantPax)
        return result.status(200)
    }catch(e){
        return e    
    }
}

const getPax = async(query)=> {
    try{
        console.log("getPax")
        const busquedaPAX = `select * from pax where id_reserva= '${query.id_reserva}'and nombre_pax= '${query.nombre_pax}' and apellido_pax ='${query.apellido_pax}' and DNI_pax= '${query.DNI_pax}'`
        const result = await knex.raw(busquedaPAX)
        return result
    }catch(e){
        return e    
    }
}
const detallesreserva = async(id_reserva)=> {
    try{
        console.log("detalleReserva")
        const detallesReserva = `select r.id_reserva, 
        r.id_vue,r.fecha, r.DNI_pax as DNI_Titular, r.mail_pax, r.telefono_pax, r.cant_pax, p.DNI_pax, p.nombre_pax, p.apellido_pax
        from reserva r  inner join PAX p on r.id_reserva=p.id_reserva where r.id_reserva='${id_reserva}'`
        const result = await knex.raw(detallesReserva)
        return result
    }catch(e){
        return e    
    }
}


/*
async function getByAge(edadMin, edadMax) {
    const selectByEdadQuery = `SELECT * FROM estudiantes WHERE edad >= ${edadMin} AND edad <= ${edadMax};`
    const result = await knex.raw(selectByEdadQuery)
    //     .select('*').from('estudiantes')
    //     .whereBetween('edad', [edadMin, edadMax])
    return result
}

async function getByDni(dni) {
    const selectByDni = `SELECT TOP 1 * FROM estudiantes WHERE dni='${dni}';`
    const result = await knex.raw(selectByDni)
    return result[0]
}

async function add(nuevo) {
    try {
        let insertionQuery = 'INSERT INTO estudiantes '
        insertionQuery += '(nombre, apellido, edad, dni) '
        insertionQuery += `VALUES ('${nuevo.nombre}', '${nuevo.apellido}', ${nuevo.edad}, '${nuevo.dni}')`
        await knex.raw(insertionQuery)
        return nuevo
    } catch (err) {
        throw { status: 500, descripcion: err.message }
    }
}

async function deleteByDni(dni) {
    const deleteByDniQuery = `DELETE FROM estudiantes WHERE dni=${dni}`
    await knex.raw(deleteByDniQuery)
    return
}

async function updateByDni(dni, nuevoEstu) {
    let updateByDniQuery = 'UPDATE estudiantes '
    updateByDniQuery += `SET nombre='${nuevoEstu.nombre}', `
    updateByDniQuery += `apellido='${nuevoEstu.apellido}', edad=${nuevoEstu.edad}, dni='${nuevoEstu.dni}' `
    updateByDniQuery += `WHERE dni=${dni};`
    await knex.raw(updateByDniQuery)
    return nuevoEstu
}
*/
module.exports = {
    getOrig,
    getDest,
    getvuelo,
    getVuelodetalle,
    getVueloall,
    updateVuelo,
    insertPax,
    getPax,
    getcantPax,
    nuevaReserva,
    getreserva,
    detallesreserva
}
