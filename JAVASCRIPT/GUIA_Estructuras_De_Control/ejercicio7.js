/*
EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. 
Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cargaDeValores(valoresNegativos,valoresPositivos,multiplosDeQuince,valoresParesAcumulados,cantidadNumerosIngresados){
    if (cantidadNumerosIngresados < 10) {
        rl.question('Ingrese un numero entero a continuacion: ', (input) => {
            const num = parseInt(input);

            // Analizamos el número con if/else
            if (num < 0) {
                valoresNegativos++;
            } else if (num > 0) {
                valoresPositivos++;
            }

            if (num % 15 === 0) {
                multiplosDeQuince++;
            }

            if (num % 2 === 0) {
                valoresParesAcumulados += num;
            }

            // Llamamos recursivamente con los nuevos valores
            cargaDeValores(valoresNegativos, valoresPositivos, multiplosDeQuince, valoresParesAcumulados, cantidadNumerosIngresados + 1);
        });
    } else {
        // Muestra los resultados
        console.log('\nCantidad de valores negativos ingresados:', valoresNegativos);
        console.log('Cantidad de valores positivos ingresados:', valoresPositivos);
        console.log('Cantidad de múltiplos de 15 ingresados:', multiplosDeQuince);
        console.log('Valor acumulado de los números pares ingresados:', valoresParesAcumulados);
        rl.close();
    }
}

// llamamos la función por primera vez con todos los contadores en 0,
// estos correspondientes a los parametros de la funcion
cargaDeValores(0, 0, 0, 0, 0);