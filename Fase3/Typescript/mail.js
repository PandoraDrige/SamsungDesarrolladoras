"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoMail = exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(Tipo, Direccion) {
        this._Direccion = Direccion;
        this._Tipo = Tipo;
    }
    Object.defineProperty(Mail.prototype, "Tipo", {
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
    Object.defineProperty(Mail.prototype, "Direccion", {
        //Direccion
        get: function () {
            return this._Direccion;
        },
        set: function (value) {
            this._Direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
var TipoMail;
(function (TipoMail) {
    TipoMail["gmail"] = "Gmail";
    TipoMail["hotmail"] = "Hotmail";
    TipoMail["yahoo"] = "Yahoo";
    TipoMail["otros"] = "Otros";
})(TipoMail = exports.TipoMail || (exports.TipoMail = {}));
