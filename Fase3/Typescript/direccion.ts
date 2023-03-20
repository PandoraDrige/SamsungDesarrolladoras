export class Direccion {
    private _numero: Number;
    private _piso: Number;
    private _letra: String;
    private _codigoPostal: Number;
    private _poblacion: String;
    private _provincia: String;
    private _calle: String;

    constructor(
        calle: String,
        numero: Number,
        piso: Number,
        letra: String,
        codigoPostal: Number,
        poblacion: String,
        provincia: String
    ) {
        this._calle = calle
        this._numero = numero
        this._piso = piso
        this._letra = letra
        this._codigoPostal = codigoPostal
        this._poblacion = poblacion
        this._provincia = provincia
    } 

    //calle
    public get calle(): String {
        return this._calle;
    }
    public set calle(value: String) {
        this._calle = value;
    }
    //numero
    public get numero(): Number {
        return this._numero;
    }
    public set numero(value: Number) {
        this._numero = value;
    }
    //piso
    public get piso(): Number {
        return this._piso;
    }
    public set piso(value: Number) {
        this._piso = value;
    }
    //letra
    public get letra(): String {
        return this._letra;
    }
    public set letra(value: String) {
        this._letra = value;
    }
    //codigo postal
    public get codigoPostal(): Number {
        return this._codigoPostal;
    }
    public set codigoPostal(value: Number) {
        this._codigoPostal = value;
    }
    //poblacion
    public get poblacion(): String {
        return this._poblacion;
    }
    public set poblacion(value: String) {
        this._poblacion = value;
    }
    //provincia
    public get provincia(): String {
        return this._provincia;
    }
    public set provincia(value: String) {
        this._provincia = value;
    }
}