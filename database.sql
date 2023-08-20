
DROP DATABASE IF EXISTS recaudacion_peliculas;

CREATE DATABASE recaudacion_peliculas;

SHOW DATABASES;

USE recaudacion_peliculas;

SHOW TABLES;


CREATE TABLE peliculas (
    datos_peliculas INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    recaudacion_millones FLOAT NOT NULL DEFAULT 999999,
    ganancias_millones FLOAT NOT NULL DEFAULT 999999,
    secuela TINYINT NOT NULL DEFAULT false 
);

DESCRIBE peliculas;


SELECT * FROM peliculas;


/* UPDATE peliculas SET secuela = TRUE WHERE datos_peliculas = 1;

UPDATE peliculas SET secuela = TRUE WHERE datos_peliculas = 3;


DELETE FROM peliculas WHERE datos_peliculas = 2;

DELETE FROM peliculas WHERE datos_peliculas = 4; */









