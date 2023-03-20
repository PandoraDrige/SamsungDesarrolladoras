"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sexo = exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(notas, telefonos, mails, direcciones, sexo, colorFavorito, cumpleanos, dni, edad, apellidos, nombre) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._edad = edad;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        //nombre
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        //apellidos
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        //edad
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        //dni
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanos", {
        //cumpleaños
        get: function () {
            return this._cumpleanos;
        },
        set: function (value) {
            this._cumpleanos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        //Color favorito
        get: function () {
            return this._colorFavorito;
        },
        set: function (value) {
            this._colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        //sexo
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        //direcciones
        get: function () {
            return this._direcciones;
        },
        set: function (value) {
            this._direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        //mails
        get: function () {
            return this._mails;
        },
        set: function (value) {
            this._mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        //tlfnos
        get: function () {
            return this._telefonos;
        },
        set: function (value) {
            this._telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        //notas
        get: function () {
            return this._notas;
        },
        set: function (value) {
            this._notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.addDireccion = function (value) {
        this._direcciones.push(value);
    };
    Persona.prototype.addMail = function (value) {
        this._mails.push(value);
    };
    Persona.prototype.addTlfno = function (value) {
        this._telefonos.push(value);
    };
    Persona.prototype.addNota = function (value) {
        this._notas.push(value);
    };
    return Persona;
}());
exports.Persona = Persona;
var Sexo;
(function (Sexo) {
    Sexo["femenino"] = "Femenino";
    Sexo["masculino"] = "Masculino";
})(Sexo = exports.Sexo || (exports.Sexo = {}));
