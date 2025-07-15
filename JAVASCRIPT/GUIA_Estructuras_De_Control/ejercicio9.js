/*
EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:

• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('A continuación, ingresa la temperatura en Celsius: ', (input) => {
    let celsius = parseFloat(input);
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`Conversión a temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F`);

    if (fahrenheit >= 14 && fahrenheit < 32) {
        console.log("Temperatura baja");
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        console.log("Temperatura adecuada");
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        console.log("Temperatura alta");
    } else {
        console.log("Temperatura desconocida");
    }
    rl.close();
});