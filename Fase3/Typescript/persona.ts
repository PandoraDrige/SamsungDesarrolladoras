import { Telefono } from './telefono';
import { Mail } from './mail';
import { Direccion } from './direccion';

export class Persona {
    private _nombre: String;
    private _apellidos: String[];
    private _dni: String;
    private _cumpleanos: Date;
    private _edad: Number;
    private _colorFavorito: String;
    private _sexo: Sexo;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: String[];

    constructor(
        notas: String[],
        telefonos: Telefono[],
        mails: Mail[],
        direcciones: Direccion[],
        sexo: Sexo,
        colorFavorito: String,
        cumpleanos: Date,
        dni: String,
        edad: Number,
        apellidos: String[],
        nombre: String
    ) {
        this._nombre = nombre
        this._apellidos = apellidos
        this._dni = dni
        this._cumpleanos = cumpleanos
        this._edad = edad
        this._colorFavorito = colorFavorito
        this._sexo = sexo
        this._direcciones = direcciones
        this._mails = mails
        this._telefonos = telefonos
        this._notas = notas
    } 

    //nombre
    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }
    //apellidos
    public get apellidos(): String[] {
        return this._apellidos;
    }
    public set apellidos(value: String[]) {
        this._apellidos = value;
    }
    //edad
    public get edad(): Number {
        return this._edad;
    }
    public set edad(value: Number) {
        this._edad = value;
    }
    //dni
    public get dni(): String {
        return this._dni;
    }
    public set dni(value: String) {
        this._dni = value;
    }
    //cumpleaños
    public get cumpleanos(): Date {
        return this._cumpleanos;
    }
    public set cumpleanos(value: Date) {
        this._cumpleanos = value;
    }
    //Color favorito
    public get colorFavorito(): String {
        return this._colorFavorito;
    }
    public set colorFavorito(value: String) {
        this._colorFavorito = value;
    }
    //sexo
    public get sexo(): Sexo {
        return this._sexo;
    }
    public set sexo(value: Sexo) {
        this._sexo = value;
    }
    //direcciones
    public get direcciones(): Direccion[] {
        return this._direcciones;
    }
    public set direcciones(value: Direccion[]) {
        this._direcciones = value;
    }
    //mails
    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }
    //tlfnos
    public get telefonos(): Telefono[] {
        return this._telefonos;
    }
    public set telefonos(value: Telefono[]) {
        this._telefonos = value;
    }
    //notas
    public get notas(): String[] {
        return this._notas;
    }
    public set notas(value: String[]) {
        this._notas = value;
    }
    
    public addDireccion(value: Direccion) {
        this._direcciones.push(value)
    }
    public addMail(value: Mail) {
        this._mails.push(value)
    }
    public addTlfno(value: Telefono) {
        this._telefonos.push(value)
    }
    public addNota(value: String) {
        this._notas.push(value)
    }
}

export enum Sexo {
    femenino = "Femenino",
    masculino = "Masculino",
}