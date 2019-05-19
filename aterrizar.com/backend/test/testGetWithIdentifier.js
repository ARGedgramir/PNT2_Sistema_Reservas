const request = require('request-promise-native')

async function runTest(serverUrl, targetDni, expectedErrorCode){

    const options = {
        uri: `${serverUrl}/estudiantes/${targetDni}`,
        json: true
    }

    try {
        const estudiante = await request(options)

        if (!estudiante) {
            console.log("get by id: mensaje vacío (sin estudiante)")
        } else if (!estudiante.hasOwnProperty('dni')) {
            console.log("get by id: el estudiante recibido no tiene dni")
        } else if (estudiante.dni != targetDni) {
            console.log("get by id: el estudiante recibido no es el buscado")
        } else if (!estudiante.hasOwnProperty('nombre')) {
            console.log("get by id: el estudiante recibido no tiene nombre")
        } else if (!estudiante.hasOwnProperty('apellido')) {
            console.log("get by id: el estudiante recibido no tiene apellido")
        } else if (!estudiante.hasOwnProperty('edad')) {
            console.log("get by id: el estudiante recibido no tiene edad")
        } else {
            console.log("get by id: ok")
        }
    } catch (err) {
        if (err.statusCode == expectedErrorCode) {
            console.log("get by id: ok (con error esperado)")
        } else {
            console.log("get by id: error inesperado")
        }
    }
}

async function testGetWithIdentifier(serverUrl) {
    runTest(serverUrl, 111)
    runTest(serverUrl, 123, 404)
}

module.exports = testGetWithIdentifier
