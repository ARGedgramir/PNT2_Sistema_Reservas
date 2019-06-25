const express = require('express')
const paxDAO = require('./paxDAO_SQL')
const reservasDAO = require('./reservasDAO_SQL')
const router = express.Router()
const funciones = require('./funciones')


router.post('/PAX', async (req, res) => {
    try {
        const reserva = await reservasDAO.getreserva(req.query.id_reserva)

        if (!isNaN(reserva))
        throw res.status(400).json("La Reserva no Existente")
        //Validar cantidad de PAX para la Reserva
         //Agregar PAX     
         const crearPAX = await paxDAO.insertPax(req.query)
         if (crearPAX)throw res.status(401).json("Error al crear Pasajero")
          // actualizar vuelo
         const cantPax = await reservasDAO.getcantPax(req.query)
         //Cerrar reserva 
         if (reserva[0].cant_pax === cantPax ){const cerrarReserva = await funciones.cerrarReservas(req.query)
            if(!cerrarReserva) throw  res.status(402).json("Error al cerrar la Reserva")
             return res.status(200).json("Reserva Cerrada")
         }  
     }catch(e){
         return e  
     }
})
 

module.exports = router