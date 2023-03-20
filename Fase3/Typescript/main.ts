import { Direccion } from './direccion';
import { TipoTlfn, Telefono } from './telefono';
import { Mail, TipoMail } from "./mail";
import { Persona, Sexo } from "./persona";

var PRESONAS:Persona[] = [];

function crearPersona(nombre:String,apellidos:String[],edad:Number,dni:String,cumpleaños:Date,colorFavorito:String,sexo:Sexo,direcciones,mails,tlfnos,notas:String[]){
    return new Persona(notas,tlfnos,mails,direcciones,sexo,colorFavorito,cumpleaños,dni,edad,apellidos,nombre);
}
function crearMail(tipo: TipoMail, direccion:String){
    return new Mail(tipo,direccion);
}
function crearTlfno(tipo: TipoTlfn, numero:Number){
    return new Telefono(tipo,numero);
}
function crearDireccion(calle:String, numero:Number, piso:Number, letra:String, codigoPostal:Number,poblacion:String, provincia:String){
    return new Direccion(calle,numero,piso,letra,codigoPostal,poblacion,provincia)
}

function main(){
    console.log("Creando 3 personas...");
    //Crear persona 1
    let nombre = 'Pepito';
    let apellidos = ['Grillo','Pinocho'];
    let edad = 26;
    let dni = '123456789T';
    let cumpleaños = new Date("1995-02-12");
    let colorFavorito = 'Verde';
    let sexo = Sexo.masculino;
    let direcciones = [crearDireccion('Calle Santa Cruz',23,5,'E',21541,'Segovia','Segovia')]
    let mails = [crearMail(TipoMail.gmail,'pepito.el.grillo@gmail.com')]
    let tlfnos = [crearTlfno(TipoTlfn.movil,345355643)]
    let notas = ['Puede que te hable al oído']
    let persona1= crearPersona(nombre,apellidos,edad,dni,cumpleaños,colorFavorito,sexo,direcciones,mails,tlfnos,notas)
    PRESONAS.push(persona1)

    //Crear persona 2
    nombre = 'Kida';
    apellidos = ['Nedkah'];
    edad = 184;
    dni = 'desconocido';
    cumpleaños = new Date("1720-08-12");
    colorFavorito = 'Azul';
    sexo = Sexo.femenino;
    direcciones = [crearDireccion('Debajo del mar',4,5,'A',10212,'Escombros','Atlantida')]
    mails = [crearMail(TipoMail.otros,'kida.reina_atlantis@atlantida.at')]
    tlfnos = [crearTlfno(TipoTlfn.movil,659541536)]
    notas = ['Si te descuidas te inunda la casa']
    let persona2 = crearPersona(nombre,apellidos,edad,dni,cumpleaños,colorFavorito,sexo,direcciones,mails,tlfnos,notas)
    PRESONAS.push(persona2)

    //Crear persona 3
    nombre = 'Pedro';
    apellidos = ['Balmaceda','Pascal'];
    edad = 47;
    dni = '98856789W';
    cumpleaños = new Date("1975-04-02");
    colorFavorito = 'Rojo';
    sexo = Sexo.masculino;
    direcciones = [crearDireccion('Calle Santa Cruz',13,8,'D',90041,'Last','OfUs')]
    mails = [crearMail(TipoMail.gmail,'pedro.elboss@gmail.com'),crearMail(TipoMail.hotmail,'p.theLastOfMe@hotmail.com')]
    tlfnos = [crearTlfno(TipoTlfn.fijo,958412545)]
    notas = ['Mata hongos por placer','Cazador de narcos']
    let persona3 = crearPersona(nombre,apellidos,edad,dni,cumpleaños,colorFavorito,sexo,direcciones,mails,tlfnos,notas)
    PRESONAS.push(persona3)
    console.dir(PRESONAS, { depth: null })
}

function newDireccionByDni(dni:string){
    console.log(`Modificando persona con DNI ${dni} ...`);
    PRESONAS.forEach(persona => {
        if (persona.dni.toLowerCase() == dni.toLowerCase()){
            console.log(`Modificando a ${persona.nombre} ...`);
            const dir = crearDireccion('Calle Madrid',48,12,'Derecha',90089,'Madrid','Madird')
            persona.addDireccion(dir)

            const mail = crearMail(TipoMail.yahoo,'vivo_en_la_tierra@yahoo.com')
            persona.addMail(mail)

            const tlfno = crearTlfno(TipoTlfn.fijo, 999362541)
            persona.addTlfno(tlfno)
        }
        
    });
    console.log("Resultado final:");
    console.dir(PRESONAS, { depth: null })
}

main()
console.log('_______________________________________________')
newDireccionByDni('desconocido')

