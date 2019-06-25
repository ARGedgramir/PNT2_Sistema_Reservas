# Vuelos
- [POST api/PAX/PAX](.basics/vuelos-getVuelos.md)

# POST api/PAX/PAX/
Agrega un PAX a una reserva Abierta

## URL del Recurso
`http://localhost:8090/api/PAX/PAX?`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre        | Obligatorio | Descripcion                                               |
| id_reserva    |     SI      |ID generado para la la reserva.                            |
| DNI_pax       |     SI      |DNI del pasajero titular de la reserva.                    |
| nombre_pax    |     SI      |Nombre del pasajero titular de la reserva.                 |
| apellido_pax  |     SI       |Apellido del pasajero titular de la reserva.              |

## Ejemplo de solicitud

`GET http://127.0.0.1:8090/api/PAX/PAX?id_reserva=bue3377609&DNI_pax=336670121&nombre_pax=juan&apellido_pax=Marmol`

## Ejemplo de respuesta
```JSON
[
    "Reserva Cerrada"
]
```
