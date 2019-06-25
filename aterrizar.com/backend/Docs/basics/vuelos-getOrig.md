# Vuelos
- [GET api/vuelos/orig](.basics/vuelos-getOrig.md))

# GET api/vuelos/orig
Obtener una lista de aeropuertos de origenes.

## URL del Recurso
`http://localhost:8090/api/vuelos/orig`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre | Obligatorio | Descripcion                                                          |
|--------|-------------|----------------------------------------------------------------------|
|--------|-------------|----------------------------------------------------------------------|

## Ejemplo de solicitud

`GET http://localhost:8090/api/vuelos/orig`

## Ejemplo de respuesta
```JSON
[
    {
        "id_orig": "bue-EAP",
        "nombre_orig": "Buenos Aires",
        "aeropuerto_orig": "Aeroparque Jorgue Newbery"
    },
    {
        "id_orig": "BUE-EZE",
        "nombre_orig": "Buenos Aires",
        "aeropuerto_orig": "Aeropuerto Inter. Ministro Pistarini"
    }
]
```
