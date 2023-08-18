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

INSERT INTO peliculas (nombre, recaudacion_millones, ganancias_millones)
VALUES ("Infierno", 175, 55);

INSERT INTO peliculas (nombre, recaudacion_millones, ganancias_millones, secuela)
VALUES ("Paraiso", 300, 125, true);

INSERT INTO peliculas (nombre, recaudacion_millones, ganancias_millones)
VALUES ("Inundacion Mortal", 90, 23);

INSERT INTO peliculas (nombre, recaudacion_millones, ganancias_millones, secuela)
VALUES ("Punto de Quiebre", 450, 155, true);


SELECT * FROM peliculas;


UPDATE peliculas SET secuela = TRUE WHERE datos_peliculas = 1;

UPDATE peliculas SET secuela = TRUE WHERE datos_peliculas = 3;


DELETE FROM peliculas WHERE datos_peliculas = 2;

DELETE FROM peliculas WHERE datos_peliculas = 4;









