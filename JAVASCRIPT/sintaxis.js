// Comentarios => Deshabilitar lineas
/*
    Multi
    Lineas
*/

// Impresiones en consola

console.log('Hola Mundo');


// Variables, Constantes
let variable = "Kevin";
//var variablecita = "FR";

//variable = 3;

const numero = 3.1416;
//numero = 4; // No se puede reasignar un valor a una constante
console.log(numero);

//Concatenación -> suma de algo a un string
console.log("Hola " + variable);
console.log("5" + 5); // Esto es una concatenación, no una suma

// Cambiar los tipos de valores o variables
// Parse = convertir un tipo de dato a otro
let cinco = parseInt("5");
console.log(cinco + 5);

// Operadores Matemáticos
let suma = 5 + 5;
let resta = 10 - 5;
let division = 10 / 2;
let multiplicacion = 10 * 2;
let modulo = 10 % 2; // Módulo y/o Residuo, el residuo de la división

// Operadores lógicos
// AND (&&), OR (||), NOT (!)

// Operadores de comparación
// Igualdad (==), Desigualdad (!=)
let igualdad = "5" == 5; // Esto es true, porque compara el valor
console.log(igualdad); // true

let igualdadEstricta = "5" === 5; // Esto es false, porque compara el valor y el tipo
console.log(igualdadEstricta); // false

let desigualdad = "5" != 5; // Esto es false, porque compara el valor
console.log(desigualdad); // false

let desigualdadEstricta = "5" !== 5; // Esto es true, porque compara el valor y el tipo
console.log(desigualdadEstricta); // true

// Operadores de comparaciones matemáticos

let mayorQue = 5 > 3; // true
let menorQue = 5 < 3; // false
let mayorIgualQue = 5 >= 3; // true
let menorIgualQue = 5 <= 3; // false
console.log(mayorQue, menorQue, mayorIgualQue, menorIgualQue);


// Estructuras de control o condicionales les importan booleanos osea: true | false

if(false){
    console.log("Esto funciona");
}else if (true){
    console.log("Acá no llega");
}

switch(opcion){
    case 1:
        console.log("Opción 1 seleccionada");
        break;
        default:
        console.log("Opción no válida");
}

// Ternario
condicion ? "caso true" : "caso false";

// Estructuras de repetición o bucles (loops)
while (contador < 5 && contador > 0) {
    console.log(contador);
    contador++; //condicion de corte
}

contador = 0;
do{ // do while, se ejecuta al menos una vez
    console.log(contador);
    contador++; //condicion de corte                
} while (contador < 5 && contador > 0);


for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Funciones

function saludar(){
    console.log("Hola desde una función");
}

// Funciones anonimas

const funcioncita = function() { console.log("Hola desde una función anónima"); }
funcioncita();

// Fat Arrow Functions o Funciones flecha
// Funcion preferible mas utilizada, debemos utilizar esta!!!!!!!!
const functionFlecha = () => { console.log("Hola desde una función flecha");}
functionFlecha();