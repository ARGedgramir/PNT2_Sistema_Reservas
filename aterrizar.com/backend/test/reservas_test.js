/* eslint-disable no-undef */
const arrayMockeadoReservas = require('./mocks/arrayMockeadoReservas.json')
const reservaByIdMockeada = require('./mocks/reservaById.json')
const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../src/server');
const should = chai.should();

chai.use(chaiHTTP);

describe('Reservas', function () {

    describe('El Endpoint /api/reservas/nuevaReserva', function () {
        it.skip('Genera una reserva correctamente', (done) => {
            let reserva = {
                id_reserva: "DL101ATLBUE",
                id_vue: "DL101",
                fecha: "2019-08-26",
                DNI_pax: 41666442,
                cant_pax: 2,
                telefono_pax: 46341445,
                mail_pax: "mateo@ort.edu.ar",
                nombre_pax: "Mateo",
                apellido_pax: "Salvatto"
            }
            chai.request(server)
                .post(`/api/reservas/nuevaReserva?id_reserva=DL101ATLBUE&id_vue=DL101&DNI_pax=41666442&cant_pax=2&telefono_pax=46341445&mail_pax=mateo@ort.edu.ar&nombre_pax=Mateo&apellido_pax=Salvatto`)
                .end((err, res) => {
                    res.should.have.status(201);
                    // console.log(res.body);
                    // res.body.should.be.an('array');
                    done();
                });
        });
    });

    describe('El Endpoint /api/reservas/all', function () {
        it('Devuelve todas las reservas', (done) => {
            chai.request(server)
                .get('/api/reservas/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    res.body.forEach((reserva, index) => {
                        reserva.should.have.property('id_reserva').eql(arrayMockeadoReservas[index].id_reserva);
                        reserva.should.have.property('id_vue').eql(arrayMockeadoReservas[index].id_vue);
                        reserva.should.have.property('fecha').eql(arrayMockeadoReservas[index].fecha);
                        reserva.should.have.property('cant_pax').eql(arrayMockeadoReservas[index].cant_pax);
                        reserva.should.have.property('Telefono_pax').eql(arrayMockeadoReservas[index].Telefono_pax);
                        reserva.should.have.property('mail_PAX').eql(arrayMockeadoReservas[index].mail_PAX);
                        reserva.should.have.property('DNI_pax').eql(arrayMockeadoReservas[index].DNI_pax);
                        reserva.should.have.property('nombre_pax').eql(arrayMockeadoReservas[index].nombre_pax);
                        reserva.should.have.property('apellido_pax').eql(arrayMockeadoReservas[index].apellido_pax);
                    });
                    done();
                });
        });
    });

    describe('El Endpoint /api/reservas/id_reserva', function () {
        it('Devuelve la reserva de id: ', (done) => {
            chai.request(server)
                .get('/api/reservas/buemdz1103')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    res.body.forEach((reserva, index) => {
                        reserva.should.have.property('id_reserva').eql(reservaByIdMockeada[index].id_reserva);
                        reserva.should.have.property('id_vue').eql(reservaByIdMockeada[index].id_vue);
                        reserva.should.have.property('fecha').eql(reservaByIdMockeada[index].fecha);
                        reserva.should.have.property('DNI_Titular').eql(reservaByIdMockeada[index].DNI_Titular);
                        reserva.should.have.property('mail_pax').eql(reservaByIdMockeada[index].mail_pax);
                        reserva.should.have.property('telefono_pax').eql(reservaByIdMockeada[index].telefono_pax);
                        reserva.should.have.property('cant_pax').eql(reservaByIdMockeada[index].cant_pax);
                        reserva.should.have.property('DNI_pax').eql(reservaByIdMockeada[index].DNI_pax);
                        reserva.should.have.property('nombre_pax').eql(reservaByIdMockeada[index].nombre_pax);
                        reserva.should.have.property('apellido_pax').eql(reservaByIdMockeada[index].apellido_pax);
                    });
                    done();
                });
        });

        it("Se produjo un error al buscar por origen 'Raymundo'", (done) => {
            chai.request(server)
                .get('/api/reservas/Raymundo')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});