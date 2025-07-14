/*
EJERCICIO 4: 
Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. 
*/

function CalcularNumeroMayor (numero1, numero2){
   let numeroInicial = numero1;
   let SegundoNumero = numero2;

   if (numeroInicial <= SegundoNumero) {
    console.log("El numero mayor es: " + SegundoNumero)
   } else {
    console.log("El numero mayor es: " + numeroInicial)
   }
}

// Datos de prueba

let numeros1 = 1;
let numeros2 = 10;
CalcularNumeroMayor(numeros1,numeros2)