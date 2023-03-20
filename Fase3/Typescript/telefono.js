"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTlfn = exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(Tipo, Numero) {
        this._Numero = Numero;
        this._Tipo = Tipo;
    }
    Object.defineProperty(Telefono.prototype, "Tipo", {
        //Tipo
        get: function () {
            return this._Tipo;
        },
        set: function (value) {
            this._Tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "Numero", {
        //Numero
        get: function () {
            return this._Numero;
        },
        set: function (value) {
            this._Numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
var TipoTlfn;
(function (TipoTlfn) {
    TipoTlfn["fijo"] = "Fijo";
    TipoTlfn["movil"] = "Movil";
})(TipoTlfn = exports.TipoTlfn || (exports.TipoTlfn = {}));
