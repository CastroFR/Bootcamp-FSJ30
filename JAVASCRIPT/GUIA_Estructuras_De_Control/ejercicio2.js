// *********************************************************************************************
// EJERCICIO 2: 
// *********************************************************************************************
// Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
// • Examen =20%
// • tareas = 40%
// • asistencia = 10%
// • investigación = 30%
// Al final deberá mostrar los datos del alumno, nombre, carnet y nota final

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {

  // Validar que los parámetros no sean nulos o indefinidos
  if (!nombre || !carnet) {
    console.error("El nombre y el carnet son obligatorios.");
    return;
  }
  // Validar que el nombre y el carnet sean cadenas de texto
  if (typeof nombre !== 'string' || typeof carnet !== 'string') {
    console.error("El nombre y el carnet deben ser cadenas de texto.");
    return;
  }
  // Validar que los parámetros sean números y estén en el rango adecuado
  if (
    typeof examen !== 'number' || examen < 0 || examen > 10 ||
    typeof tareas !== 'number' || tareas < 0 || tareas > 10 ||
    typeof asistencia !== 'number' || asistencia < 0 || asistencia > 10 ||
    typeof investigacion !== 'number' || investigacion < 0 || investigacion > 10
  ) {
    console.error("Las notas deben ser numeros entre 0 y 10.");
    return;
  }

  // Calcular la nota final
  const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
  console.log("\n****************");
  console.log("Datos del alumno");
  console.log("****************");
  console.log(`Nombre: ${nombre}`);
  console.log(`Carnet: ${carnet}`);
  console.log(`Nota final: ${notaFinal.toFixed(2)}`); // Mostrar la nota final con dos decimales
  
}
  // Funcion para pedir los datos al usuario
  function pedirDatosAlUsuario() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Preguntar por los datos del alumno, mostrar un anuncio
  console.log("*********************************************************");
  console.log("Por favor, introduzca los datos del alumno a continuación");
  console.log("*********************************************************");

  rl.question("Ingrese el nombre del alumno: ", function(nombre) {
    rl.question("Ingrese el carnet del alumno: ", function(carnet) {
      rl.question("Ingrese la nota del examen (0-10): ", function(examenString) {
        rl.question("Ingrese la nota de las tareas (0-10): ", function(tareasString) {
          rl.question("Ingrese la nota de asistencia (0-10): ", function(asistenciaString) {
            rl.question("Ingrese la nota de investigación (0-10): ", function(investigacionString) {

              // Convertir las notas a número
              const examen = Number(examenString);
              const tareas = Number(tareasString);
              const asistencia = Number(asistenciaString);
              const investigacion = Number(investigacionString);


              calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion);
              rl.close();
            });
          });
        });
      });
    });
  });
} 
// Para ejecutar la función que pide los datos:
pedirDatosAlUsuario();