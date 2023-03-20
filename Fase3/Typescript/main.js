"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
var PRESONAS = [];
function crearPersona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, tlfnos, notas) {
    return new persona_1.Persona(notas, tlfnos, mails, direcciones, sexo, colorFavorito, cumpleaños, dni, edad, apellidos, nombre);
}
function crearMail(tipo, direccion) {
    return new mail_1.Mail(tipo, direccion);
}
function crearTlfno(tipo, numero) {
    return new telefono_1.Telefono(tipo, numero);
}
function crearDireccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
    return new direccion_1.Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia);
}
function main() {
    console.log("Creando 3 personas...");
    //Crear persona 1
    var nombre = 'Pepito';
    var apellidos = ['Grillo', 'Pinocho'];
    var edad = 26;
    var dni = '123456789T';
    var cumpleaños = new Date("1995-02-12");
    var colorFavorito = 'Verde';
    var sexo = persona_1.Sexo.masculino;
    var direcciones = [crearDireccion('Calle Santa Cruz', 23, 5, 'E', 21541, 'Segovia', 'Segovia')];
    var mails = [crearMail(mail_1.TipoMail.gmail, 'pepito.el.grillo@gmail.com')];
    var tlfnos = [crearTlfno(telefono_1.TipoTlfn.movil, 345355643)];
    var notas = ['Puede que te hable al oído'];
    var persona1 = crearPersona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, tlfnos, notas);
    PRESONAS.push(persona1);
    //Crear persona 2
    nombre = 'Kida';
    apellidos = ['Nedkah'];
    edad = 184;
    dni = 'desconocido';
    cumpleaños = new Date("1720-08-12");
    colorFavorito = 'Azul';
    sexo = persona_1.Sexo.femenino;
    direcciones = [crearDireccion('Debajo del mar', 4, 5, 'A', 10212, 'Escombros', 'Atlantida')];
    mails = [crearMail(mail_1.TipoMail.otros, 'kida.reina_atlantis@atlantida.at')];
    tlfnos = [crearTlfno(telefono_1.TipoTlfn.movil, 659541536)];
    notas = ['Si te descuidas te inunda la casa'];
    var persona2 = crearPersona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, tlfnos, notas);
    PRESONAS.push(persona2);
    //Crear persona 3
    nombre = 'Pedro';
    apellidos = ['Balmaceda', 'Pascal'];
    edad = 47;
    dni = '98856789W';
    cumpleaños = new Date("1975-04-02");
    colorFavorito = 'Rojo';
    sexo = persona_1.Sexo.masculino;
    direcciones = [crearDireccion('Calle Santa Cruz', 13, 8, 'D', 90041, 'Last', 'OfUs')];
    mails = [crearMail(mail_1.TipoMail.gmail, 'pedro.elboss@gmail.com'), crearMail(mail_1.TipoMail.hotmail, 'p.theLastOfMe@hotmail.com')];
    tlfnos = [crearTlfno(telefono_1.TipoTlfn.fijo, 958412545)];
    notas = ['Mata hongos por placer', 'Cazador de narcos'];
    var persona3 = crearPersona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, tlfnos, notas);
    PRESONAS.push(persona3);
    console.log(PRESONAS);
}
function newDireccionByDni(dni) {
    console.log("Modificando persona con DNI ".concat(dni, " ..."));
    PRESONAS.forEach(function (persona) {
        if (persona.dni.toLowerCase() == dni.toLowerCase()) {
            console.log("Modificando a ".concat(persona.nombre, " ..."));
            var dir = crearDireccion('Calle Madrid', 48, 12, 'Derecha', 90089, 'Madrid', 'Madird');
            persona.addDireccion(dir);
            var mail = crearMail(mail_1.TipoMail.yahoo, 'vivo_en_la_tierra@yahoo.com');
            persona.addMail(mail);
            var tlfno = crearTlfno(telefono_1.TipoTlfn.fijo, 999362541);
            persona.addTlfno(tlfno);
        }
    });
    console.log("Resultado final:");
    console.dir(PRESONAS, { depth: null });
}
main();
console.log('_______________________________________________');
newDireccionByDni('desconocido');
