const request = require('request-promise-native');

async function testPostWithBody(serverUrl) {

    const testEstuds = [
        {
            nombre: 'aaa',
            apellido: 'aaaaa',
            edad: 5,
            dni: 111
        },
        {
            nombre: 'bbb',
            apellido: 'bbbbb',
            edad: 10,
            dni: 222
        },
        {
            nombre: 'ccc',
            apellido: 'ccccc',
            edad: 15,
            dni: 333
        },
        {
            nombre: 'ddd',
            apellido: 'ddddd',
            edad: 20,
            dni: 444
        }
    ]

    let testResult = true

    for (const estudiante of testEstuds) {

        const options = {
            method: 'POST',
            uri: `${serverUrl}/estudiantes`,
            body: estudiante,
            json: true
        }

        try {
            const result = await request(options)

            if (!result) {
                console.log("post: mensaje vacío (sin estudiante)")
            } else if (!result.hasOwnProperty('nombre')) {
                console.log("post: el estudiante recibido no tiene nombre")
            } else if (!result.hasOwnProperty('apellido')) {
                console.log("post: el estudiante recibido no tiene apellido")
            } else if (!result.hasOwnProperty('edad')) {
                console.log("post: el estudiante recibido no tiene edad")
            } else if (!result.hasOwnProperty('dni')) {
                console.log("post: el estudiante recibido no tiene dni")
            }
        } catch (err) {
            console.log(err.error)
            // if (err.statusCode == 400) {
            //     console.log("post: error - peticion mal formada")
            // } else if (err.statusCode == 500) {
            //     console.log("post: error - el servidor no pudo realizar lo pedido")
            // } else {
            //     console.log("post: error inesperado")
            // }
            testResult = false
        }
    }
    if (testResult) {
        console.log("post: ok")
    }
}

module.exports = testPostWithBody
