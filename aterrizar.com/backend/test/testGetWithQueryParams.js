const request = require('request-promise-native');

async function runTest(serverUrl, testMin, testMax, expectedErrorCode) {
    
    const options = {
        uri: `${serverUrl}/vuelos`,
        qs: { edadMin: testMin, edadMax: testMax },
        json: true
    }

    try {
        const vuelos = await request(options)

        let testOK = true
        for (let i = 0; i < vuelos.length && testOK; i++) {
            if (!vuelos[i].nombre) {
                console.log("get with query: el estudiante recibido no tiene nombre")
                testOK = false
            } else if (!vuelos[i].apellido) {
                console.log("get with query: el estudiante recibido no tiene apellido")
                testOK = false
            } else if (!vuelos[i].edad) {
                console.log("get with query: el estudiante recibido no tiene edad")
                testOK = false
            } else if (vuelos[i].edad != testMin || vuelos[i].edad != testMax) {
                console.log("get with query: el estudiante recibido tiene edades distintas a las enviadas")
                testOK = false
            } else if (!vuelos[i].dni) {
                console.log("get with query: el estudiante recibido no tiene dni")
                testOK = false
            }
        }
        if (testOK) {
            console.log("get by query: ok")
        }
    } catch (err) {
        if (err.statusCode == expectedErrorCode) {
            console.log("get by query: ok (con error esperado)")
        } else {
            console.log("get by query: error inesperado")
        }
    }
}

async function testGetWithQueryParams(serverUrl) {
    runTest(serverUrl, 2,4)
    runTest(serverUrl, -2,4, 400)
}

module.exports = testGetWithQueryParams