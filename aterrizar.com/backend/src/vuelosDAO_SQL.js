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
        const selectAllQuery = `SELECT * FROM vue_Dest where id_dest='${req.params.vue_orig}'`
        const result = await knex.raw(selectAllQuery)
        return result
    }catch(e){
        return e
    }
}
const getvuelo = async(req)=> {
    try{
        const selectAllQuery = `SELECT * FROM vuelos where orig='${req.query.origen}'and dest='${req.query.destino}' and fecha='${req.query.fecha}'`
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
    getvueloall
}
