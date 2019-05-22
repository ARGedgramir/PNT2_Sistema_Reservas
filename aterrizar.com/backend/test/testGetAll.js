const request = require('request-promise-native');

async function testGetAll(serverUrl) {

    const options = {
        uri: `${serverUrl}/vuelos`,
        json: true
    }

    try {
        const vuelos = await request(options)

        let testOK = true
        for (let i = 0; i < vuelos.length && testOK; i++) {
            if (!vuelos[i].hasOwnProperty('nombre')) {
                console.log("get all: el estudiante recibido no tiene nombre")
                testOK = false
            } else if (!vuelos[i].hasOwnProperty('edad')) {
                console.log("get all: el estudiante recibido no tiene edad")
                testOK = false
            } else if (!vuelos[i].hasOwnProperty('dni')) {
                console.log("get all: el estudiante recibido no tiene dni")
                testOK = false
            }
        }
        if (testOK) {
            console.log("get all: ok")
        }
    } catch (err) {
        console.log("get all: error en la respuesta del servidor")
    }
}

module.exports = testGetAll