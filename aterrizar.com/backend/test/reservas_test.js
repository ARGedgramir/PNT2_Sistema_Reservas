const assert = require('assert');
const reservasRouter = require('../src/reservasRouter');
const arrayMockeadoReservas = require('./mocks/arrayMockeadoReservas.json')
const reservaByIdMockeada = require('./mocks/reservaById.json')

describe('Reservas', function() {

    describe('El Endpoint getAll', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await reservasRouter.get('/Mostrarreservas/all');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(arrayMockeadoReservas));
        });

        it.skip('Se produjo un error', async function() {

        });
    });

    describe('El Endpoint getById', function() {
        it('Devuelve los datos correctamente', async function() {
            const resultado = await reservasRouter.get('/Mostrarreservas/:id_reserva')//('jeremias.hsn@gmail.com', '4');
            assert.deepStrictEqual(JSON.stringify(resultado), JSON.stringify(reservaByIdMockeada));
        });

        it('Se produjo un error', async function() {
            const resultado = await reservasRouter.getByEmailAndId('/Mostrarreservas/:id_reserva')//('jeremias.hsn@gmail.com', '6');
            assert.deepStrictEqual(resultado, undefined);
        });
    });
});