const arrayMockeadoVuelos = require('./mocks/arrayMockeadoVuelos.json');
const arrayMockeadoAerDest = require('./mocks/arrayMockeadoAerDest.json');
const arrayMockeadoAerOrig = require('./mocks/arrayMockeadoAerOrig.json');
const arrayMockeadoVuelosByDestino = require('./mocks/arrayMockeadoVueloByDestino.json');
const arrayMockeadoVuelosByOrigen = require('./mocks/arrayMockeadoVueloByOrigen.json');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../src/server');
const should = chai.should();

chai.use(chaiHTTP);

describe("Vuelos", function () {

    describe("El endpoint api/vuelos/all", function () {
        it("Devuelve una lista de todos los vuelos", (done) => {
            chai.request(server)
                .get('/api/vuelos/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    res.body.forEach((vuelo, index) => {
                        vuelo.should.have.property('id_vue').eql(arrayMockeadoVuelos[index].id_vue);
                        vuelo.should.have.property('aerolinea').eql(arrayMockeadoVuelos[index].aerolinea);
                        vuelo.should.have.property('orig').eql(arrayMockeadoVuelos[index].orig);
                        vuelo.should.have.property('orig_aeropuerto').eql(arrayMockeadoVuelos[index].orig_aeropuerto);
                        vuelo.should.have.property('dest').eql(arrayMockeadoVuelos[index].dest);
                        vuelo.should.have.property('dest_aeropuerto').eql(arrayMockeadoVuelos[index].dest_aeropuerto);
                        vuelo.should.have.property('fecha').eql(arrayMockeadoVuelos[index].fecha);
                        vuelo.should.have.property('escala_aeropuerto').eql(arrayMockeadoVuelos[index].escala_aeropuerto);
                        vuelo.should.have.property('disponible').eql(arrayMockeadoVuelos[index].disponible);
                    });
                    done();
                });
        })
    })

    describe("El endpoint api/vuelos/Orig", function () {
        it("Devuelve una lista de todos los aeropuertos de origen", (done) => {
            chai.request(server)
                .get('/api/vuelos/Orig')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    res.body.forEach((vuelo, index) => {
                        vuelo.should.have.property('id_orig').eql(arrayMockeadoAerOrig[index].id_orig);
                        vuelo.should.have.property('nombre_orig').eql(arrayMockeadoAerOrig[index].nombre_orig);
                        vuelo.should.have.property('aeropuerto_orig').eql(arrayMockeadoAerOrig[index].aeropuerto_orig);
                    });
                    done();
                });
        });
    });

    describe("El endpoint api/vuelos/Dest", (done) => {
        it("Devuelve una lista de todos los aeropuertos de destino", (done) => {
            chai.request(server)
            .get('/api/vuelos/Dest')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                res.body.forEach((vuelo, index) => {
                    vuelo.should.have.property('id_dest').eql(arrayMockeadoAerDest[index].id_dest);
                    vuelo.should.have.property('nombre_dest').eql(arrayMockeadoAerDest[index].nombre_dest);
                    vuelo.should.have.property('aeropuerto_dest').eql(arrayMockeadoAerDest[index].aeropuerto_dest);
                });
                done();
            });
        });
    });

    describe("El endpoint api/vuelos/", (done) => {
        it("Devuelve los vuelos por destino 'Mendoza'", (done) => {
            chai.request(server)
            .get('/api/vuelos?destino=Mendoza')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                res.body.forEach((vuelo, index) => {
                    vuelo.should.have.property('id_vue').eql(arrayMockeadoVuelosByDestino[index].id_vue);
                    vuelo.should.have.property('aerolinea').eql(arrayMockeadoVuelosByDestino[index].aerolinea);
                    vuelo.should.have.property('orig').eql(arrayMockeadoVuelosByDestino[index].orig);
                    vuelo.should.have.property('orig_aeropuerto').eql(arrayMockeadoVuelosByDestino[index].orig_aeropuerto);
                    vuelo.should.have.property('dest').eql(arrayMockeadoVuelosByDestino[index].dest);
                    vuelo.should.have.property('dest_aeropuerto').eql(arrayMockeadoVuelosByDestino[index].dest_aeropuerto);
                    vuelo.should.have.property('fecha').eql(arrayMockeadoVuelosByDestino[index].fecha);
                    vuelo.should.have.property('escala_aeropuerto').eql(arrayMockeadoVuelosByDestino[index].escala_aeropuerto);
                    vuelo.should.have.property('disponible').eql(arrayMockeadoVuelosByDestino[index].disponible);
                    vuelo.should.have.property('duracion').eql(arrayMockeadoVuelosByDestino[index].duracion);
                    vuelo.should.have.property('hora_llegada').eql(arrayMockeadoVuelosByDestino[index].hora_llegada);
                    vuelo.should.have.property('hora_partida').eql(arrayMockeadoVuelosByDestino[index].hora_partida);
                    vuelo.should.have.property('precio').eql(arrayMockeadoVuelosByDestino[index].precio);
                    vuelo.should.have.property('PaxDisp').eql(arrayMockeadoVuelosByDestino[index].PaxDisp);
                });
                done();
            });
        });

        it("Devuelve los vuelos por origen 'Atlanta' ", (done) => {
            chai.request(server)
            .get('/api/vuelos?origen=Atlanta')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                res.body.forEach((vuelo, index) => {
                    vuelo.should.have.property('id_vue').eql(arrayMockeadoVuelosByOrigen[index].id_vue);
                    vuelo.should.have.property('aerolinea').eql(arrayMockeadoVuelosByOrigen[index].aerolinea);
                    vuelo.should.have.property('orig').eql(arrayMockeadoVuelosByOrigen[index].orig);
                    vuelo.should.have.property('orig_aeropuerto').eql(arrayMockeadoVuelosByOrigen[index].orig_aeropuerto);
                    vuelo.should.have.property('dest').eql(arrayMockeadoVuelosByOrigen[index].dest);
                    vuelo.should.have.property('dest_aeropuerto').eql(arrayMockeadoVuelosByOrigen[index].dest_aeropuerto);
                    vuelo.should.have.property('fecha').eql(arrayMockeadoVuelosByOrigen[index].fecha);
                    vuelo.should.have.property('escala_aeropuerto').eql(arrayMockeadoVuelosByOrigen[index].escala_aeropuerto);
                    vuelo.should.have.property('disponible').eql(arrayMockeadoVuelosByOrigen[index].disponible);
                    vuelo.should.have.property('duracion').eql(arrayMockeadoVuelosByOrigen[index].duracion);
                    vuelo.should.have.property('hora_llegada').eql(arrayMockeadoVuelosByOrigen[index].hora_llegada);
                    vuelo.should.have.property('hora_partida').eql(arrayMockeadoVuelosByOrigen[index].hora_partida);
                    vuelo.should.have.property('precio').eql(arrayMockeadoVuelosByOrigen[index].precio);
                    vuelo.should.have.property('PaxDisp').eql(arrayMockeadoVuelosByOrigen[index].PaxDisp);
                });
                done();
            });
        });

        it("Se produjo un error al buscar por origen 'Raymundo'", (done) => {
            chai.request(server)
            .get('/api/vuelos?origen=Raymundo')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });

});
