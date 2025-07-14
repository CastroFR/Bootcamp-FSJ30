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


// *******************************************************************************************
// 08-07-2025

// Arrays -> Estructura de datos que nos permite almacenar varios valores en una sola variable
// ... Estructura de dats que guarda datos de forma ordenada y nosotros definimos, como los va a guardar.
// podemos guardar cualquier tipo de datos en el, pero lo ideal es que solo tenga 1 tipo de datos, para que sea
// facil trabajarlo

// 2 TIPOS DE Arrays (1-Indexado y 2- Asociativo)
// 1- Indexado -> Array normal, se accede a los valores por su indice
// ordenada en indice 0 en adelante
let arraycitoIdx = [18, 19, 25, 33];
console.log(arraycitoIdx[0]);

// 2- Asociativo
// Es un array donde nosostros cambiamos los indices de los valores por claves, tipo => clave : "valor"
let arrayAsociativo = {
    nombre : "Kevin"
}
console.log(arrayAsociativo['nombre']);

// Array multidimensional
// es un array con otros array adentro de él

// Creamos un array con varias dimensiones (Array dentro de array)
let arraycitoMulti = [ [1,2],[{ nombre : "kevin"}]];
//                             (esta es la propiedad)
console.log(arraycitoMulti); // Acceder al nombre de kevin

// Accedemos a la posiion 0 => ES LA PRIMERA DEL ARRAY
let cajaDeIndiceCero = arraycitoMulti[0];
// imprimir el 2
console.log(cajaDeIndiceCero[1]); // Acceder al primer valor del primer array

// Accedemos a la posicion 1 => ES LA SEGUNDA DEL ARRAY
let cajaDeIndiceUno = arraycitoMulti[1];
// Accedemos a la caja para ver su contenido

// Estos console log muestran el nombre:
console.log(cajaDeIndiceUno[0].nombre); // Acceder al nombre de kevin
console.log(cajaDeIndiceUno[1][0].nombre); // Acceder al nombre de kevin

// ======================================================================

// Métodos para Arrays
// Necesarios conocer para el Frontend

// Recorrer Arrays
let nombres = ["Kevin", "Francisco", "Castro"];

// Dar vuelta a un array
let nombresAlReves = nombres.reverse();
console.log(nombresAlReves);


// ForEach -> funciona por callback este es un metodo de los arrays, Este funciona recorriendo un array
//              y nos deja utilizar la posicion y el indice del array
// callback -> Es una funcion que se pasa como parametro a otra funcion, para esto se utilizan las funciones
//             flecha o funciones anónimas
nombres.forEach( (value, index) => {
    console.log("Posición: "+ value + ",","Indice: "+ index);
})

// Continuacion de clase, parte de recorrer arrays
// ForEach que reciba el array completo

let arrayNum = [1,2,3,4,5];

arrayNum.forEach( (value, index, array) => {
    arrayNum.pop(); // Elimina el ultimo elemento del array
    console.log(array)
})

// Este forEach imprime el siguiente valor del array
// Si el indice es menor al largo del array, imprime el siguiente valor
// ForEach que recibe el array completo
let arrayNums = [1,2,3,4,5];

arrayNums.forEach( (value, index, array) => {
    if(index+1 < array.length) {
        console.log(array[index+1]);
    }
})

/*
** forEach comentado
**
*/ 



// Metodos utiles
// Map -> Recorre el array y nos retorna algo por cada posicion -> transformar valores
let nombre = ["Kevin", "Francisco", "Kiko"];

let nombresMayus = nombres.map((value) => {
    return value.toUpperCase()
});
console.log(nombresMayus);

let numeritos = [1,2,3,4,5];

let numeritosPorDos = numeritos.map((value) => {
    return value * 2;
});

console.log(numeritosPorDos);



// *******************************************************************************************
// 09-07-2025


// Filtrar información

// Hay 2metodos utilizados para esto:
// 1- filter y 2- find

// 1- filter -> filtramos la info y la retornamos en base a una condición
// ejemplo, usuarios que tengan edad arriba de 21 los muestra sino no.
const usuarios = [{
    nombre: "Kevin",
    edad: 30
},{
    nombre: "Jorge",
    edad: 28
},{
    nombre: "Jose",
    edad: 18
}]

// el value comunmente no se emira como tal, sino como el valor del arreglo utilizado
// const mayoresDe21 = usuarios.filter( (value) => { return value.edad > 21 })
// console.log(mayoresDe21)

// quedando entonces asi
// array.filter( (apodoValorDeCadaPosicion) => { return CONDICION A CUMPLIR } )
const mayoresDe21 = usuarios.filter( (usuarios) => { return usuarios.edad > 21 })
console.log(mayoresDe21)

// 2- find -> busca un elemento en el array y lo retorna, si no lo encuentra retorna undefined
// Find -> Buscamos y RETORNAMOS un solo dato
// Ejercicio RETORNAR el objeto de la posicion 0 del array usuarios, en este caso "Kevin"

const usuarioKevin = usuarios.find( (usuario) => { return usuario.nombre === "Kevin" })
// Si no encuentra el usuario, retorna undefined
console.log(usuarioKevin);



// Metodo OBLIGATORIOS
let array = [];
// agregar datos al array
array.push(2);
// array[] = 2; // otra sintaxis para hacerlo, pero debemos tener el push en el contexto

array.unshift(1); // Metodo para agregar elementos al inicio del array 

// eliminar datos del array
array.pop(); // Elimina el ultimo elemento del array

// eliminar datos del array
array.shift(); // Elimina el primer elemento del array

console.log(array)

// Obtener el largo de un array
let largo = array.length; // Retorna el largo del array
console.log(largo); // retorna 0, por que estamos elmininando todo aantes en los, array


// Strings
// La propiedad lenght sirve tambien para string, que feliz que soy con JS
// Contando caracteres del string holaja kevin
console.log("Holaja Kevin ".length);

// Metodo para eliminar los espacios al principio y al final (trim)
// utilizado en formularios
let sinEspacios = "Holaja Kevin ".trim();
console.log(sinEspacios.length); 