const knex = require('./db/knex')

const getAll = async()=> {
    try{
        const selectAllQuery = `SELECT * FROM vue_orig`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e
    }
}
const getOrig = async()=> {
    try{
        const selectAllQuery = `SELECT * FROM vue_Orig`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e
    }
}
const getDest = async(req)=> {
    try{
        const selectAllQuery = `SELECT * FROM vue_Dest where id_dest='${req.params.vue_dest}'`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e
    }
}
const getvuelo = async(req)=> {
    try{
            const selectAllQuery = `
            SELECT v.id_vue,    v.aerolinea,v.orig,
            v.orig_aeropuerto,v.dest, v.dest_aeropuerto,v.fecha,v.escala_aeropuerto,v.disponible,vd.duracion,vd.hora_llegada,vd.hora_partida,vd.precio,vd.PaxDisp
             FROM vuelos  v inner join vuelos_detalle vd on v.id_vue=vd.id_vue
              where v.orig='${req.query.origen}'and v.dest='${req.query.destino}' and v.fecha='${req.query.fecha}' and vd.PaxDisp>'${req.query.cant_pax}'`
            let result = await knex.raw(selectAllQuery)
        if(!isNaN(result)){
            let noEncontrado = "No encontrado"
            return noEncontrado}
        return result
    }catch(e){
        return e
    }
}

const getvueloall = async()=> {
    try{
        const selectAllQuery = `SELECT * FROM vuelos`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e
    }
}



const updateVuelo = async(req)=> {
    try{
        const selectAllQuery = `Update vuelos_detalle set paxdisp =  paxdisp -'${req.query.totpax}'
where id_vue ='${req.query.id_vue}'`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e
    }
}
const updatePax = async(req)=> {
    try{
        const selectAllQuery = `INSERT INTO PAX
        VALUES ('${req.query.id_reserva}','${req.query.DNI_pax}', '${req.query.nombre_pax}','${req.query.apellido_pax}')`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e    
    }
}
const reserva = async(req)=> {
    try{
        const selectAllQuery = `INSERT INTO reserva
        VALUES ('${req.query.id_reserva}','${req.query.id_vue}', '${req.query.fecha}','${req.query.dni_pax}','${req.query.cant_pax}',
        '${req.query.telefono_pax}','${req.query.mail_pax}')`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e    
    }
}
const getreserva = async(req)=> {
    try{
        const selectAllQuery = `select * from reserva where id_reserva= '${req.params.id_reserva}'`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e    
    }
}
const detallesreserva = async(req)=> {
    try{
        const selectAllQuery = `select * from PAX where id_reserva= '${req.params.id_reserva}'`
        const result = await knex.raw(selectAllQuery)
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
    getAll,
    getOrig,
    getDest,
    getvuelo,
    getvueloall,
    updateVuelo,
    updatePax,
    reserva,
    getreserva,
    detallesreserva
}
