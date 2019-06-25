const assert = require('assert');
const vuelosRouter = require('../src/vuelosRouter');
const arrayMockeadoVuelos = require('./mocks/arrayMockeadoVuelos.json');
const vueloMockeado = require('./mocks/vueloById.json');

describe("Vuelos", function(){

    describe("El endpoint getAll", function(){

        it("Devuelve los datos correctamente", async function(){
            const resultado = await vuelosRouter.get('/all/');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(arrayMockeadoVuelos))
        })

        it.skip("Se produjo un error", async function(){

        })
    })
})

describe("El endpoint getById", function(){
    
    it("Devuelve los datos correctamente", async function () {
        const resultado = await vuelosRouter.get('/vuelos');
        assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(vueloMockeado));
    });

    it("Se produjo un error", async function () {
        const resultado = await vuelosRouter.getByTitulo("0000000000000000000000");
        assert.deepStrictEqual(JSON.stringify(resultado), '[]');

    });
})
