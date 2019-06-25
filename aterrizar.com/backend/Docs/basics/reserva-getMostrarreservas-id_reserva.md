# Vuelos
- [GET api/reserva/Mostrarreservas/:id_reserva](./basics/reserva-GetMostrarreservas-id_reserva.md)

# GET api/reservas/Mostrarreservas/:id_reserva
Recibe un identificador de reserva para mostrar su contenido.

## URL del Recurso
`http://localhost:8090/api/reservas/Mostrarreservas/:id_reserva`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre       | Obligatorio | Descripcion                                                    |
|  id_reserva  |     SI      |Identificador de una reserva existente                          |


## Ejemplo de solicitud

`GET http://127.0.0.1:8090/api/reservas/Mostrarreservas/bue11haa`

## Ejemplo de respuesta
```JSON
[
    {
        "id_reserva": "bue11haa",
        "id_vue": "AR2601",
        "fecha": "22/06/2019",
        "DNI_Titular": "33445542",
        "mail_pax": "edgardo.ramirez@gmail.com",
        "telefono_pax": "11231564787",
        "cant_pax": 1,
        "DNI_pax": 33445542,
        "nombre_pax": "Edgardo",
        "apellido_pax": "Ramirez"
    }
]
```
