# Vuelos
- [GET api/vuelos/all](.basics/vuelos-getVuelos-all.md)

# GET api/vuelos/all
Obtener una lista con todos los vuelos disponibles.

## URL del Recurso
`http://localhost:8090/api/vuelos/all`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre   | Obligatorio | Descripcion                                                        |
|----------|-------------|--------------------------------------------------------------------|
|----------|-------------|--------------------------------------------------------------------|

## Ejemplo de solicitud

`GET http://localhost:8090/api/vuelos/all`

## Ejemplo de respuesta
```JSON
[
    {
        "id_vue": "brrio01",
        "aerolinea": "LAN",
        "orig": "Buenos Aires",
        "orig_aeropuerto": "bue-eze",
        "dest": "Rio de Janeiro",
        "dest_aeropuerto": "bra-gig",
        "fecha": "2019-06-23T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true
    },
    {
        "id_vue": "brrio02",
        "aerolinea": "LAN",
        "orig": "Rio de Janeiro",
        "orig_aeropuerto": "bra-gig",
        "dest": "Buenos Aires",
        "dest_aeropuerto": "bue-eze",
        "fecha": "2019-06-23T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true
    },
    {
        "id_vue": "DL101",
        "aerolinea": "Delta",
        "orig": "Buenos Aires",
        "orig_aeropuerto": "bue-eze",
        "dest": "Atlanta",
        "dest_aeropuerto": "atl-atl",
        "fecha": "2019-08-26T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true
    },
    {
        "id_vue": "DL102",
        "aerolinea": "Delta",
        "orig": "Atlanta",
        "orig_aeropuerto": "atl-atl",
        "dest": "Buenos Aires",
        "dest_aeropuerto": "bue-eze",
        "fecha": "2019-08-30T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true
    },
    {
        "id_vue": "AR2880",
        "aerolinea": "Aerolineas Argentinas",
        "orig": "Buenos Aires",
        "orig_aeropuerto": "bue-aep",
        "dest": "San Salvador de Jujuy",
        "dest_aeropuerto": "ssj-juy",
        "fecha": "2019-05-29T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true
    },
    {
        "id_vue": "AR2881",
        "aerolinea": "Aerolineas Argentinas",
        "orig": "San Salvador de Jujuy",
        "orig_aeropuerto": "ssj-juy",
        "dest": "Buenos Aires",
        "dest_aeropuerto": "bue-aep",
        "fecha": "2019-05-30T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true
    },
    {
        "id_vue": "AR2550",
        "aerolinea": "Aerolineas Argentinas",
        "orig": "Buenos Aires",
        "orig_aeropuerto": "bue-aep",
        "dest": "Ushuaia",
        "dest_aeropuerto": "tdf-uha",
        "fecha": "2019-06-30T00:00:00.000Z",
        "escala_aeropuerto": null,
        "disponible": true
    }
]
```
