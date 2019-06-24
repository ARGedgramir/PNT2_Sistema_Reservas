const knex = require('./db/knex')

const insertPax = async(query)=> {
    try{
        const insertarPax  = `INSERT INTO PAX
        VALUES ('${query.id_reserva}',
        '${query.DNI_pax}',
        '${query.nombre_pax}',
        '${query.apellido_pax}')`
        const result = await knex.raw(insertarPax)
        return result
    }catch(e){
        return e
    }
}

const getPax = async(query)=> {
    try{
        const busquedaPAX = `select * from pax where id_reserva= '${query.id_reserva}'and nombre_pax= '${query.nombre_pax}' and apellido_pax ='${query.apellido_pax}' and DNI_pax= '${query.DNI_pax}'`
        const result = await knex.raw(busquedaPAX)
        return result   
    }catch(e){
        return e    
    }
}

module.exports = {
    insertPax,
    getPax
}
