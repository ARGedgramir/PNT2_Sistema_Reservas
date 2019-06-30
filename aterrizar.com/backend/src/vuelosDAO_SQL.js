const knex = require('./db/knex')

const getOrig = async () => {
    try {
        const aeropuertosOrigen = `SELECT * FROM vue_Orig`
        const result = await knex.raw(aeropuertosOrigen)
        return result
    } catch (e) {
        return e
    }
}
const getDest = async () => {
    try {
        const aeropuertosDestino = `SELECT * FROM vue_Dest`
        const result = await knex.raw(aeropuertosDestino)
        return result
    } catch (e) {
        return e
    }
}
const getvuelo = async (query) => {
    try {

        let busquedaVuelosUsuario = `
            SELECT v.id_vue,    v.aerolinea,v.orig,
            v.orig_aeropuerto,v.dest, v.dest_aeropuerto,v.fecha,v.escala_aeropuerto,v.disponible,vd.duracion,vd.hora_llegada,vd.hora_partida,vd.precio,vd.PaxDisp
             FROM vuelos  v inner join vuelos_detalle vd on v.id_vue=vd.id_vue`;
        if (query) {
            const condiciones = [];
            if (query.origen) {
                condiciones.push(`v.orig='${query.origen}'`);
            }
            if (query.destino) {
                condiciones.push(`v.dest='${query.destino}'`);
            }
            if (query.fecha) {
                condiciones.push(`v.fecha='${query.fecha}'`);
            }
            if (query.cant_pax) {
                condiciones.push(`vd.PaxDisp>${query.cant_pax}`);
            }

            if (condiciones.length > 1) {
                busquedaVuelosUsuario += ` where ${condiciones.join(' and ')}`;
            } else if (condiciones.length = 1) {
                busquedaVuelosUsuario += ` where ${condiciones[0]}`;
            }
        }
        let result = await knex.raw(busquedaVuelosUsuario)
        if (!isNaN(result)) {
            throw new Error("No encontrado");
        }
        return result
    } catch (e) {
        throw e
    }
}

const getVuelodetalle = async (query) => {
    try {
        const detalleVuelo = `SELECT paxDisp FROM vuelos_detalle where id_vue='${query.id_vue}'`
        const result = await knex.raw(detalleVuelo)
        return result
    } catch (e) {
        return e
    }
}

const getVueloall = async () => {
    try {
        const detalleVuelo = `SELECT * FROM vuelos`
        const result = await knex.raw(detalleVuelo)
        return result
    } catch (e) {
        return e
    }
}

const updateVuelo = async (cant_pax, id_vue) => {
    try {
        const actualizarVuelo = `Update vuelos_detalle set paxdisp =  paxdisp -'${updateVuelo}' where id_vue ='${id_vue}'`
        const result = await knex.raw(actualizarVuelo)
        return result.status(200)
    } catch (e) {
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
