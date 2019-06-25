# Vuelos
- [POST api/reservas/nuevareserva](.basics/reserva-postnuevaReserva.md)

# POST api/reservas/
Recibe los parametros de una reserva para generar la misma.

## URL del Recurso
`http://localhost:8090/api/reservas/nuevareserva/`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre       | Obligatorio | Descripcion                                               |
| id_vue       |     SI      |identificacion de un vuelo especifico seleccionado.        |
| fecha        |     SI      |Fecha del vuelo especifico.                                |
| DNI_pax      |     SI      |DNI del pasajero titular de la reserva.                    |
| cant_pax     |     SI      |Cantidad de pasajeros para el vuelo especifico.            |
| telefono_pax |     SI      |Telefono del pasajero titular de la reserva.               |
| mail_pax     |     SI      |Mail del pasajero titular de la reserva.                   |
| nombre_pax   |     SI      |Nombre del pasajero titular de la reserva.                 |
| apellido_pax |     SI      |Apellido del pasajero titular de la reserva.               |
| id_reserva   |     SI      |ID generado para la la reserva.                            |


## Ejemplo de solicitud

`POST http://127.0.0.1:8090/api/reservas/nuevaReserva?id_vue=AR2601&fecha=22/06/2019&DNI_pax=33445542&cant_pax=1&telefono_pax=11231564787&mail_pax=edgardo.ramirez@gmail.com&nombre_pax=Edgardo&id_reserva=bue1af&apellido_pax=Ramirez`

## Ejemplo de respuesta
```JSON
{
    "status": 200,
    "message": "Reserva Cerrada"
}
```
