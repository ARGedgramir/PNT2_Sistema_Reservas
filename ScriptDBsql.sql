/*Para ejecutar estos comandos pueden pintar Query por Query o sacar los comentarios y correrlos todos juntos.
*/
/*
//Creacion de usuario en el motor SQL y en la BD.
USE [master]
GO
CREATE LOGIN [Login_aterri] WITH PASSWORD=N'Pass#0rD', 
                 DEFAULT_DATABASE=[aterrizar.com], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
USE [aterrizar.com]
GO
CREATE USER [Login_aterri] FOR LOGIN [Login_aterri] WITH DEFAULT_SCHEMA=[dbo]
GO

//Creacion de Tablas 
use [aterrizar.com]
CREATE TABLE [dbo].[vue_orig](
	[id_orig] [varchar](250) NOT NULL,
	[nombre_orig] [varchar](250) NOT NULL,
	[aeropuerto_orig] [varchar](500) NOT NULL
	)
GO
CREATE TABLE [dbo].[vue_dest](
	[id_dest] [varchar](250) NOT NULL,
	[nombre_dest] [varchar](250) NOT NULL,
	[aeropuerto_dest] [varchar](500) NOT NULL
	)
GO

//Insersion de Datos
INSERT into vue_orig (id_orig,nombre_orig,aeropuerto_orig)
values ('bue-EAP','Buenos Aires','Aeroparque Jorgue Newbery'),('BUE-EZE','Buenos Aires','Aeropuerto Inter. Ministro Pistarini')
go

use [aterrizar.com]
INSERT into vue_dest (id_dest,nombre_dest,aeropuerto_dest)
values ('COR-COR','Cordoba','Aeropuerto Int. Ing. Ambrosio Taravella'),('BUE-EZE','Buenos Aires','Aeropuerto Inter. Ministro Pistarini')
go


CREATE TABLE [dbo].[vuelos](
		[id_vue] [varchar](7) NOT NULL,
	[aerolinea] [varchar](250) NOT NULL,
	[orig] [varchar](250) NOT NULL,
	[orig_aeropuerto] [varchar](250) NOT NULL,
	[dest] [varchar](250) NOT NULL,
	[dest_aeropuerto] [varchar](250) NOT NULL,
	[fecha] [date]NOT NULL,
	[escala_aeropuerto] [varchar](250),
	[disponible] [bit] NOT NULL,
	)
GO
CREATE TABLE [dbo].[vuelos_detalle	](
		[id_vue] [varchar](7) NOT NULL,
	[duracion] [int] NOT NULL,
	[hora_partida] [time] NOT NULL,
	[hora_llegada] [time] NOT NULL,
	[precio] [float] NOT NULL,	
	)
GO
INSERT INTO [aterrizar.com].[dbo].[vuelos]
           ([id_vue],[aerolinea],[orig],[orig_aeropuerto],[dest],[dest_aeropuerto],[fecha],[escala_aeropuerto],[disponible])
     VALUES
     ('brrio01','LAN','buenos aires','bue-eze','rio de janeiro','bra-gig','06-23-2019',NULL,1),
     ('brrio02','LAN','rio de janeiro','bra-gig','buenos aires','bue-eze','06-23-2019',NULL,1)


INSERT INTO [aterrizar.com].[dbo].[vuelos_detalle	]
           ([id_vue],[duracion],[hora_partida],[hora_llegada],[precio])
     VALUES('brrio01',3,'09:00:00','12:00:00',450), ('brrio02',3,'15:00:00','18:00:00',490)

GO

*/
