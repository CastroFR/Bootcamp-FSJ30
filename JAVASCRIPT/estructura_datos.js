// Estrcuturas de datos
// evadir la limitacion de datos priituvos

// Datos primitivos -> string, integer, float, double, bool, null
// datos asignar a variables pero solo una cosa

// ++++++++++++++++++++++
//let vacio = null;
// ++++++++++++++++++++++

// UNDEFINED -> Vacio para el sistema | es un error considerable, algo fallo
// NULL -> nO ES ERROR, indica que en algun momento algo se alamacenara

let vacio = null;
console.log(vacio);

// estructura de datos es que una clase guarde muchas cosas en una sola

vacio = "String re estandar";
console.log(vacio);

// 2 estructuras de datos obligatorias

// Objetos -> como representacion de algo, JS internamente asi lo maneja
// TIPOS: 

// Objetos literales -> tiene una limitación, por qur la variable perro almacena el objeto nombre y edad pero
// no puedo crear mas perros, sino pues ya tengo mi perro original. y si creo otro seria diferente a este.

// Esto es util cuando se desea por ejemplo en llenado de formularios, con datos de usuario.
let perro = {
    //clave: valor
    nombre: "Chochan",
    edad: 4
}

let perro2 = {
    //clave: valor
    nombre: "Kiko",
    edad: 2
}

// Mostrar una caracteristica del perro
console.log(perro.nombre + perro2.nombre)


// POO -> Programación Orientada a Objetos
// Es una forma de escrbir el codigo
// Busca que sea: Reutilizable.

// Clases y objeto
// Clase -> Molde
// Objeto -> Instancia de una clase
// Instancia -> Creamos algo en base a

class Persona {
// una clase de POO se compone de 3 cosas:
// 1- Caractersticas -> Atributos/ Propiedades
// 2- Constructor -> Metodo para crear objetos atraves de este molde
constructor(nombreParam,edadParam){
    // this -> APUNTAMOS A CLASE "Persona"
    this.nombre = nombreParam;
    this.edad = edadParam;
}
// En JS carateristicas y constructor funcionan igual con la POO

    // 3- Métodos -> Funciones, cosas que hace esta clase
    correr( ){ 
        console.log("Estoy corriendo");
        return "Estoy corriendo.";
    }
}

//Utilizar el constructor de persona -> INSTANCIAR OBJETOS
let personita = new Persona("Kevin", 20);
let personita2 = new Persona("Francisco", 25);
console.log(personita)
console.log(personita2)

// Acceder a algo de un objet, en este caso ejecutar el metodo
personita.correr();

// JS no puede aplicar los 4 pilares de la POO como tal. Por qur no es orientado a objetos
// PILARES DE POO -> OPP
// Existen para asegurarnos un codigo mas escalable, flexible y además seguro.

// 4 pilares

// PILARES QUE SI SE PUEDEN UTILIZAR EN JAVASCRIPT
// Herencia --> Una clase hija de otra, copia el comportamiento del padre
// Polimorfismo --> Cambiar el comportamiento de un método del padre, con respecto a su hijo.
// eSTOS 2 PILARES TIENE QUE IR JUNTOS
 
// Herencia -> extends ( Palabra reservada de herencia)
class Programador extends Persona {

    constructor(nombreParam, edadParam, lenguajesParam){
        // Seguir usando propiedades/caracteristicas del padre
        // super() recibe los parametros, los parametros del constructor del padre
        super(nombreParam,edadParam);

        //Caracteristicas propias del programador
        this.lenguajesProgra = lenguajesParam;
    }
    // Metodo propio del programador
    codear(){
        console.log("Estoy codeando");
    }

    //Polimorfismo -> hacer lo mismo de diferente manera, en este caso, 
    // correr seria distinto de un programador a una persona normal
    
    // Sobreescritura de metodo
    correr(){
        //super.correr();
        console.log("No corro tan rapido, pero puedo trotar.")
    }
}


// Crear un programador
let programador = new Programador("Kevin",20,"Javascript");
console.log(programador)
programador.nombre = "KEVIN";
console.log(programador);
programador.correr(); // Hereda el metodo correr del padre


//PILARES QUE NO SE PUEDEN UTILIZAR CON JAVASCRIPT
// Encapsulamiento -> limitar el acceso a la información de una clase -> modificadores de acceso (public, private, protected)
// Abstracción -> Nos da herramientas o metodos para acceder a información encapsulada






