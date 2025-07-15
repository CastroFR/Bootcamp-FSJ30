/*
EJERCICIO 6: 
Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y 
si el destino es Puerto el Triunfo el descuento será del 15%.
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function descuentoViajes(origenViaje, destinoViaje) {
    if (origenViaje === "Ciudad de palma" && destinoViaje === "Costa del sol") {
        console.log("Tienes 5% de descuento");
    } else if (origenViaje === "Ciudad de palma" && destinoViaje === "Panchimalco") {
        console.log("Tienes 10% de descuento");
    } else if (origenViaje === "Ciudad de palma" && destinoViaje === "Puerto el triunfo") {
         console.log("Tienes 15% de descuento");
    } else {
        origenViaje === destinoViaje
        console.log("No tenenemos descuentos en el viaje ingresado")
    }
}

// datos de prueba
/*
let viajeInicio = "Ciudad de pala";
let viajeFinal = "Costa del sol";
descuentoViajes(viajeInicio, viajeFinal);
*/

rl.question('Ingrese la ciudad de origen: ', (origen) => {
    rl.question('Ingrese la ciudad de destino: ', (destino) => {
        descuentoViajes(origen, destino);
        rl.close();
    });
});
