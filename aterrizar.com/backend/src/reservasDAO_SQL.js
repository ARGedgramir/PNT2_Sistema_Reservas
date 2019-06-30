const knex = require('./db/knex')

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

const getreserva = async(id_reserva)=> {
    try{
        const busquedaReserva = `select * from reserva where id_reserva= '${id_reserva}'`
        const result = await knex.raw(busquedaReserva)
        return result
    }catch(e){
        return e;    
    }
}

const getreservasAll = async()=> {
    try{
        const busquedaReserva = `select 
        r.id_reserva,r.id_vue,r.fecha, r.cant_pax, r.Telefono_pax,r.mail_PAX,p.DNI_pax, p.nombre_pax, p.apellido_pax
         from reserva r inner join PAX p on r.id_reserva=p.id_reserva `
        const result = await knex.raw(busquedaReserva)
        return result
    }catch(e){
        return e    
    }
}

const detallesreserva = async(id_reserva)=> {
    try{
        const detallesReserva = `select r.id_reserva, 
        r.id_vue,r.fecha, r.DNI_pax as DNI_Titular, r.mail_pax, r.telefono_pax, r.cant_pax, p.DNI_pax, p.nombre_pax, p.apellido_pax
        from reserva r  inner join PAX p on r.id_reserva=p.id_reserva where r.id_reserva='${id_reserva}'`
        const result = await knex.raw(detallesReserva)
        return result
    }catch(e){
        return e    
    }
}

const getcantPax = async(query)=> {
    try{
        const cantPax = `select count(id_reserva) from PAX where id_reserva= '${query.id_reserva}'`
        const result = await knex.raw(cantPax)
        return result[0]['']
    }catch(e){
        return e    
    }   
}

module.exports = {
    nuevaReserva,
    getreserva,
    detallesreserva,
    getreservasAll,
    getcantPax
}
