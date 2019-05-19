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
*/