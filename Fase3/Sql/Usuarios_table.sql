CREATE TABLE Usuarios (
    Id int NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(20) NOT NULL,
    Apellidos VARCHAR(20) NOT NULL,
    Email VARCHAR(20) NOT NULL
) ENGINE = INNODB DEFAULT CHARSET = utf8mb4;