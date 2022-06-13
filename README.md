# Pasos para ejecutar el proyecto:

# 1) Crear base de datos:
Escribir los siguientes comandos en MySQL Workbench

CREATE DATABASE empresa;
CREATE TABLE `departmento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `empleado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `departmento` int DEFAULT NULL,
  `direccion` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `departmento_idx` (`departmento`),
  CONSTRAINT `departmento` FOREIGN KEY (`departmento`)
    REFERENCES `departmento` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO `departmento` (`id`,`nombre`) VALUES (1,'Finanzas');
INSERT INTO `departmento` (`id`,`nombre`) VALUES (2,'IT');
INSERT INTO `departmento` (`id`,`nombre`) VALUES (3,'Recursos Humanos');
INSERT INTO `departmento` (`id`,`nombre`) VALUES (4,'Ventas');

# 3) Correr los siguientes comandos en la terminal dentro de la carpeta del proyecto:
npm i

npm un mysql 

npm i mysql2

npm i cors

# 3) Configurar en el archivo "db.js" los datos correspondientes a la conexión a la base de datos:
![image](https://user-images.githubusercontent.com/82101541/173268509-66174a6a-076a-44de-a206-71457b97c7ca.png)

# 4) En el archivo "index.js" tener en cuenta la linea 17.
El puerto configurado aquí debe ser aquel en el que se corra la aplicación react del frontend.
![image](https://user-images.githubusercontent.com/82101541/173269057-65a91ca8-2f09-4a00-9659-dcaa53b14613.png)


