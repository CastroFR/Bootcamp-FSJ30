/* 
EJERCICIO 3:
CATEGORIA AUMENTO
A          15%
B          30%
C          10%
D          20%

Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial. 
*/

function calculoAumentoTrabajador (nombre, salario, categoria) {
    let rangoCategorico = categoria;
    //let sueldo = 0;
    switch (rangoCategorico) {
     case "A":
         sueldo = 0.15
         break;
     case "B":
         sueldo = 0.30
         break;
     case "C":
         sueldo = 0.10
         break;
     case "D":
         sueldo = 0.20
         break;
     default:
         sueldo = 0;
    }

    let aumento = salario * sueldo;
    let cantidadEnAumento = salario + aumento;
    //return cantidadEnAumento;

    console.log("Nombre: "+ nombre);
    console.log("Salario normal: $" + salario);
    console.log("Categoria: " + categoria);
    console.log("Aumento Porcentual: " + sueldo + "%" + " Igual a => $" + aumento);
    //console.log("Aumento Salarial: $" + aumento);
    console.log("Salario Total: $" + cantidadEnAumento);
}


// Datos de prueba
let nombres = "kevin";
let salarios = 300;
let categorias = "A";
calculoAumentoTrabajador(nombres, salarios, categorias)