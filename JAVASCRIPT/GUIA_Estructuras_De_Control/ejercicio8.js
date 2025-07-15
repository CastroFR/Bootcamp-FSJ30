/*
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numerosingresados(){
    
    rl.question('A continuación, ingrese un numero del 1 al 10 para mostrar su tabla de multiplicar: ', (input) => {
        const num = parseInt(input);
        let numeroIngresado = num;
        if (num >= 1 && num <= 10) {
                for (let i = 1; i <= 10; i++) {
                    console.log(`${num} x ${i} = ${num * i}`);
                }
                rl.close();
                console.log("Acá se muestra la tabla del numero: " + numeroIngresado);
            } else {
                console.log("\nIngrese un numero positivo válido del 1 al 10");
                numerosingresados();
            }
        });
}
numerosingresados();