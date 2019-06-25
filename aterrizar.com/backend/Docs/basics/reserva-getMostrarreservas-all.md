# Vuelos
- [GET api/reserva/Mostrarreservas/all](./basics/reserva-getMostrarreservas-all.md)

# GET api/reservas/Mostrarreservas/all
Recibe los parametros de una reserva para generar la misma.

## URL del Recurso
`http://localhost:8090/api/reservas/Mostrarreservas/all`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre       | Obligatorio | Descripcion                                                    |
|--------|-------------|----------------------------------------------------------------------|
|--------|-------------|----------------------------------------------------------------------|



## Ejemplo de solicitud

`GET http://localhost:8090/api/reservas/Mostrarreservas/all`

## Ejemplo de respuesta
```JSON
[
    {
        "id_reserva": "bue18ah1haaa",
        "id_vue": "AR2601",
        "fecha": "22/06/2019",
        "cant_pax": 1,
        "Telefono_pax": "11231564787",
        "mail_PAX": "edgardo.ramirez@gmail.com",
        "DNI_pax": 33445542,
        "nombre_pax": "Edgardo",
        "apellido_pax": "Ramirez"
    },
    {
        "id_reserva": "bue11haaa",
        "id_vue": "AR2601",
        "fecha": "22/06/2019",
        "cant_pax": 1,
        "Telefono_pax": "11231564787",
        "mail_PAX": "edgardo.ramirez@gmail.com",
        "DNI_pax": 33445542,
        "nombre_pax": "Edgardo",
        "apellido_pax": "Ramirez"
    },
]
```
