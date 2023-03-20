export class Mail {
    private _Tipo: TipoMail;
    private _Direccion: String;
    constructor(Tipo, Direccion) {
        this._Direccion = Direccion;
        this._Tipo = Tipo;
    }
    
    //Tipo
    public get Tipo(): TipoMail {
        return this._Tipo;
    }
    public set Tipo(value: TipoMail) {
        this._Tipo = value;
    }
    //Direccion
    public get Direccion(): String {
        return this._Direccion;
    }
    public set Direccion(value: String) {
        this._Direccion = value;
    }
    

}

export enum TipoMail {
    gmail = 'Gmail',
    hotmail = 'Hotmail',
    yahoo = 'Yahoo',
    otros = 'Otros'
}