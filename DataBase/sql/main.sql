-- @file main.sql
-- @brief Archivo principal de la base de datos. Crea las tablas
-- @author Carlos Salguero
-- @author Diego Sandoval
-- @date 2023-03-13
-- @version 1.0
-- 
-- @copyright Copyright (c) 2023 - MIT License

create database if not exists CarlosDiego 
default character set utf8 collate utf8_general_ci;

use CarlosDiego;

create table if not exists Usuario(
    idUsuario int not null primary key auto_increment, 
    username varchar(50), 
    password varchar(100)
);

create table if not exists Michis(
    idMichis int not null primary key auto_increment, 
    cardTitle varchar(100), 
    cardSubtitle varchar(100), 
    cardSrc varchar(255), 
    cardContent varchar(500)
);

create table if not exists ComidaPerro(
    idComidaPerro int not null primary key auto_increment, 
    cardTitle varchar(100), 
    cardSubtitle varchar(100), 
    cardSrc varchar(255), 
    cardContent varchar(500)
);