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

const updateVuelo = async(cant_pax,id_vue)=> {
    try{
        const actualizarVuelo = `Update vuelos_detalle set paxdisp =  paxdisp -'${updateVuelo}' where id_vue ='${id_vue}'`
        const result = await knex.raw(actualizarVuelo)
        return result.status(200)
    }catch(e){
        return e
    }
}

module.exports = {
    getOrig,
    getDest,
    getvuelo,
    getVuelodetalle,
    getVueloall,
    updateVuelo,
}
