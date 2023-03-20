export class Telefono {
    private _Tipo: TipoTlfn;
    private _Numero: String;
    constructor(Tipo, Numero) {
        this._Numero = Numero;
        this._Tipo = Tipo;
    }
    
    //Tipo
    public get Tipo(): TipoTlfn {
        return this._Tipo;
    }
    public set Tipo(value: TipoTlfn) {
        this._Tipo = value;
    }
    //Numero
    public get Numero(): String {
        return this._Numero;
    }
    public set Numero(value: String) {
        this._Numero = value;
    }       

}

export enum TipoTlfn {
    fijo = 'Fijo',
    movil  = 'Movil'
}