// ****************************************************************************+
// CLASE 29-07-25
// Pilares POO Typescript - Clase 29/7/25

// Paradigma -> modelo de programar
// Que programamos bajo unas reglas en especifico
// Codigo reutilizable
// Se basa en el uso de objetos y clases para organizar y estructurar el codigo
// Es un paradigma que esta orientado a clases y objetos

/*
    POO -> Es una forma de ver y pensar el codigo y las soluciones de implementaciones de oftware
    vamos a imaginar moldes para poder etandarizar las cosas -> Clases
    Utilizar los moldes para crear funcionalidad en nuestra app -> Objetos
*/

/* PILARES DE POO o OPP
- Herencia -> Obtener las caracteristicas y comportamientos del padre
- Polimorfismo -> Podemos cambiar el funcionamiento de los comportamientos del hijo frente al padre

- Encapsulamiento -> Limitar el acceso a la información
* nacen los modificadores de acceso: Public, Protected, Private, Default=Public
- Abstraccion -> Nos da herramientas(metodos) para acceder a informacion limitada
*/

class Animal{
    
    // Atributos o propiedades -> Caracteristicas de esta clase
    public especie : string;
    private edad : number;
    genero : string;
    color : string;

    // Constructor
    constructor(especieParam:string, edadParam:number, generoParam:string, colorParam:string){
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }

    // Metodos -> Acciones que puede realizar el objeto
    // Metodos -> Funciones que van a pertenecer a una clase -> Comportamiento del objeto
    comer():string{
        return "Estoy comiendo";
    }

    // Getters y Setters -> Determinan si hubo encapsulamiento
    getEdad():number{
        return this.edad;
    }

    setEdad(edadParam:number){
        this.edad = edadParam;
    }

    // Abstracción
    aumentarEdad(){
        this.edad += 1;
        //this.incrementarEdad(1);
    }
    /*
    private incrementarEdad(value:number){
        this.edad += value;
    }
    */
}

const animalito = new Animal ("Chucho",18,"Masculino","Blanco");
// Accedemos a un atributo del objeto instanciado(creado en base) de una clase
// creado en base |se puede decir también| -> instanciado
//console.log(animalito.especie);
//console.log(animalito.edad);
console.log(animalito.getEdad());

// Herencia
class Perro extends Animal{
    private raza:string;
    private nombre:string;

    constructor(especieParam:string, edadParam:number, generoParam:string, colorParam:string,razaParam:string, nombreParam:string)
    {
        // Traemos la funcionalidad del constructor del padre
        super(especieParam, edadParam, generoParam, colorParam)
        this.raza = razaParam;
        this.nombre = nombreParam;
    }

    ladrar():string{
        return "Wof gua wof gua";
    }

    // Polimorfismo
    aumentarEdad(): void {
        this.setEdad(this.getEdad() + 7);
    }

}

const perrito = new Perro("Perro",5,"Masculino","Marron","Labrador","Firulais");

// Ejemplo de clase mas real a un caso de un login
class Usuario{
    private email:string;
    private password:string;

    constructor(emailParam:string, passwordParam:string){
        this.email = emailParam;
        this.password = passwordParam;
    }

    changePassword(newPassword:string){
        this.password = newPassword;
    }

    showCredentials():Usuario{
        return this;
    }
}

const usuarito = new Usuario("kevin@meduermo.com","12345678");
usuarito.changePassword("87654321");
console.log(usuarito.showCredentials());

// ********************************************************************
// clase 30/07/25

// Tipo personalizado
type User = {
    name: string;
    email: string;
    password: string;
    rol: string;
}

let usuarito2:User = {
    name: "Kevin",
    email: "kevin@kpo.com",
    password: "12345678",
    rol: "admin"
}

interface IUser {
    name: string;
    email: string;
    password: string;
    rol: string;

    //login():string;
}

let usuarito3:IUser = {
    name: "Kevin",
    email: "kevin@kpo.com",
    password: "12345678",
    rol: "admin"
//    login() {
//        return "Me loguee con el usuario"
//    },
}

// ********************************************************************

