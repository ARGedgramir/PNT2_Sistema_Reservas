# Vuelos
- [GET api/vuelos/](.basics/Pax-postPax.md)

# GET api/vuelos/
Obtener una lista de vuelos disponibles para una busqueda especifica.

## URL del Recurso
`http://localhost:8090/api/vuelos/`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre   | Obligatorio | Descripcion                                              |
|----------|-------------|----------------------------------------------------------|
| fecha    |     SI      |Fecha del vuelo especifico                                |
| destino  |     SI      |Ciudad de destino para un vuelo especifico                |
| origen   |     SI      |Ciudad de origen para un vuelo especifico                 |
| cant_pax |     SI      |Cantidad de pasajeros para el vuelo especifico            |


## Ejemplo de solicitud

`GET http://127.0.0.1:8090/api/vuelos?fecha=2019-07-30&destino=buenos aires&origen=mendoza&cant_pax=1`

## Ejemplo de respuesta
```JSON
[
    {
        "id_vue": "FL144",
        "aerolinea": "Flybondi",
        "orig": "Mendoza",
        "orig_aeropuerto": "mdz-mdz",
        "dest": "Buenos Aires",
        "dest_aeropuerto": "bue-aep",
        "fecha": "2019-07-30T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true,
        "duracion": 2,
        "hora_llegada": "1970-01-01T17:30:00.000Z",
        "hora_partida": "1970-01-01T16:30:00.000Z",
        "precio": 12,
        "PaxDisp": 5
    }
]
```
