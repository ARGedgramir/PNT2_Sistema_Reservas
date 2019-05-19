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
CREATE TABLE [dbo].[vue_orig](
	[id_orig] [varchar](250) NOT NULL,
	[nombre_orig] [varchar](250) NOT NULL,
	[aeropuerto_orig] [varchar](500) NOT NULL
	)
GO

//Insersion de Datos
INSERT into vue_orig (id_orig,nombre_orig,aeropuerto_orig)
values ('bue-EAP','Buenos Aires','Aeroparque Jorgue Newbery')
go
*/

