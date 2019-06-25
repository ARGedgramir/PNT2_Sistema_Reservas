# Vuelos
- [GET api/vuelos/dest](.basics/vuelos-getDest.md))

# GET api/vuelos/dest
Obtener una lista de aeropuertos de destino.

## URL del Recurso
`http://localhost:8090/api/vuelos/dest`

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

`GET http://localhost:8090/api/vuelos/dest`

## Ejemplo de respuesta
```JSON
[
    {
        "id_dest": "bue-EAP",
        "nombre_dest": "Buenos Aires",
        "aeropuerto_dest": "Aeroparque Jorgue Newbery"
    },
    {
        "id_dest": "COR-COR",
        "nombre_dest": "Cordoba",
        "aeropuerto_dest": "Aeropuerto Int. Ing. Ambrosio Taravella"
    },
    {
        "id_dest": "BUE-EZE",
        "nombre_dest": "Buenos Aires",
        "aeropuerto_dest": "Aeropuerto Inter. Ministro Pistarini"
    }
]
```
