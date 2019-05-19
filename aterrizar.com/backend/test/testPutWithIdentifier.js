
const request = require('request-promise-native');

async function runTest(serverUrl, targetDni, nuevoEstu, expectedErrorCode) {

    const options = {
        method: 'PUT',
        uri: `${serverUrl}/vuelos/${targetDni}`,
        body: nuevoEstu,
        json: true
    };

    try {
        const vuelo = await request(options)

        if (!vuelo) {
            console.log("put: mensaje vacío (sin vuelo)")
        } else if (!vuelo.hasOwnProperty('dni')) {
            console.log("put: el vuelo recibido no tiene dni")
        } else if (vuelo.dni != targetDni) {
            console.log("put: el vuelo recibido no es el reemplazado")
        } else if (!vuelo.hasOwnProperty('nombre')) {
            console.log("put: el vuelo recibido no tiene nombre")
        } else if (!vuelo.hasOwnProperty('apellido')) {
            console.log("put: el vuelo recibido no tiene apellido")
        } else if (!vuelo.hasOwnProperty('edad')) {
            console.log("put: el vuelo recibido no tiene edad")
        } else {
            console.log("put: ok")
        }
    } catch (err) {
        if (err.statusCode == expectedErrorCode){
            console.log("put: ok (con error esperado)")
        } else {
            console.log("put: error inseperado")
        }
    }
}

async function testPutWithIdentifier(serverUrl) {

    const nuevoEstu = {
        nombre: 'Mirtha',
        apellido: 'Legrand',
        edad: 99,
        dni: 111
    }
    await runTest(serverUrl, 111, nuevoEstu)

    const nuevoEstu2 = {
        nombre: 'Mirtha',
        apellido: 'Legrand',
        edad: 99,
        dni: 123
    }
    await runTest(serverUrl, 123, nuevoEstu2, 404)


    const nuevoEstu3 = {
        nombre: 'Mirtha',
        apellido: 'Legrand',
        edad: 99,
        dni: 111
    }
    await runTest(serverUrl, 123, nuevoEstu3, 400)
}

module.exports = testPutWithIdentifier