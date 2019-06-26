const assert = require('assert');
const vuelosRouter = require('../src/vuelosRouter');
const arrayMockeadoVuelos = require('./mocks/arrayMockeadoVuelos.json');
const vueloMockeado = require('./mocks/vueloById.json');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../src/server');

chai.use(chaiHTTP);


describe("Vuelos", function(){

    describe("El endpoint getAll", function(){

        it("Devuelve los datos correctamente", async function(){
            chai.request(server)
            .get('/all')
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.shoul.be.a('array');
                chai.assert.equal(resultado,arrayMockeadoVuelos);
            });
            //const resultado = await vuelosRouter.get('/all/');
            //assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(arrayMockeadoVuelos))
        })

        it.skip("Se produjo un error", async function(){

        })
    })
})

describe("El endpoint getById", function(){
    
    it.skip("Devuelve los datos correctamente", async function () {
        const resultado = await vuelosRouter.get('/vuelos');
        assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(vueloMockeado));
    });

    it.skip("Se produjo un error", async function () {
        const resultado = await vuelosRouter.getByTitulo("0000000000000000000000");
        assert.deepStrictEqual(JSON.stringify(resultado), '[]');

    });
})