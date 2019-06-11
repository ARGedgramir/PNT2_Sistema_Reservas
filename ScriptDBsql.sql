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
('brrio01','LAN','Buenos Aires','bue-eze','Rio de Janeiro','bra-gig','06-23-2019',NULL,1),
('brrio02','LAN','Rio de Janeiro','bra-gig','Buenos Aires','bue-eze','06-23-2019',NULL,1),
('DL101','Delta','Buenos Aires','bue-eze','Atlanta','atl-atl','08-26-2019',NULL,1),
('DL102','Delta','Atlanta','atl-atl','Buenos Aires','bue-eze','08-30-2019',NULL,1),
('AR2880','Aerolineas Argentinas','Buenos Aires','bue-aep','San Salvador de Jujuy','ssj-juy','05-29-2019',NULL,1),
('AR2881','Aerolineas Argentinas','San Salvador de Jujuy','ssj-juy','Buenos Aires','bue-aep','05-30-2019',NULL,1),
('AR2550','Aerolineas Argentinas','Buenos Aires','bue-aep','Ushuaia','tdf-uha','06-30-2019',NULL,1),
('AR2551','Aerolineas Argentinas','Ushuaia','tdf-uha','Buenos Aires','bue-aep','06-30-2019',NULL,1),
('AR2600','Aerolineas Argentinas','Buenos Aires','bue-aep','Mendoza','mdz-mdz','07-30-2019',NULL,1),
('AR2601','Aerolineas Argentinas','Mendoza','mdz-mdz','Buenos Aires','bue-aep','07-30-2019',NULL,1),
('FL143','Flybondi','Buenos Aires','bue-aep','Mendoza','mdz-mdz','7-30-2019',NULL,1),
('FL144','Flybondi','Mendoza','mdz-mdz','Buenos Aires','bue-aep','7-30-2019',NULL,1)


INSERT INTO [aterrizar.com].[dbo].[vuelos_detalle	]
           ([id_vue],[duracion],[hora_partida],[hora_llegada],[precio])
     VALUES
	 ('brrio01',3,'09:00:00','12:00:00',450),
('brrio02',3,'15:00:00','18:00:00',490),
('DL101',10,'20:35:00','06:35:00',1250),
('DL102',10,'20:35:00','06:35:00',1300),
('AR2880',2,'16:45:00','18:45:00',100),
('AR2881',2,'16:45:00','18:45:00',100),
('AR2550',2,'18:45:00','20:45:00',150),
('AR2551',2,'21:45:00','23:45:00',150),
('AR2600',1,'17:45:00','18:45:00',50),
('AR2601',1,'19:45:00','20:45:00',50),
('FL143',1,'14:30:00','15:30:00',10),
('FL144',2,'16:30:00','17:30:00',12)

GO
alter table vuelos_detalle ADD PaxDisp	INT	

CREATE TABLE [dbo].[PAX](
	[id_reserva] [varchar](10) NOT NULL,
	[DNI_pax] [int] NOT NULL,
	[nombre_pax] [varchar](250) NOT NULL,
	[apellido_pax] [varchar](250) NOT NULL,
	)
GO

CREATE TABLE [dbo].[Reserva](
	[id_reserva] [varchar](10) NOT NULL,
	[id_vue] [varchar](10) NOT NULL,
	[fecha] [varchar](250) NOT NULL,
	[DNI_pax] [varchar](250) NOT NULL,
	[cant_pax] [int] NOT NULL,
	[telefono_pax] [varchar](30) NOT NULL,
	[mail_pax] [varchar](300) NOT NULL,
)
go

*/
