// *** EJERCICIO 1: *** 
// Crear una función que en base a la edad que ingreso el usuario devolver un mensaje
// si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.


//var edad = prompt("¿Cuántos años tienes?"); // Pedir la edad al usuario
//edad = Number(edad); // Convertir la entrada a número

// Evaluar si es mayor o menor de eda
//var resultadoEdad = edad >= 18 ? "mayor de edad" : "menor de edad"; 
// condición ? valor1 : valor2

//console.log(resultadoEdad); // Mostrar el resultado en la consola del navegador


// mismo ejercicio pero en la consola de vs code
// *****************************************************************************
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuántos años tienes? ', function(edad) { // Pedir la edad al usuario
  // Convertir la entrada a número
  edad = Number(edad);
  const resultadoEdad = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
  console.log(resultadoEdad); // Mostrar el resultado en la consola de VS Code
  rl.close();
});
