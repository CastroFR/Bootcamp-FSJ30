/*
EJERCICIO 5: 
Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. 
Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y,
si es un FORD ESCAPE el descuento será del 20%. 
Mostrar en html el coche seleccionado y el descuento que se aplicara en base
a lo que selecciono el usuario.
*/

function concesionarioSV(autosDisponibles, descuentosAplicados) {
    let descuentosEnCoches = descuentosAplicados;
    let mensajeUsuario;
    let marcaAuto = autosDisponibles;

    switch (descuentosEnCoches) {
        case 1:
            marcaAuto = "FORD FIESTA";
            descuento = 0.05
            mensajeUsuario = `Auto seleccionado: ${descuentosEnCoches}. Aplica un descuento del: 5%`;
            break;
        case 2:
            marcaAuto = "FORD FOCUS";
            descuento = 0.10
            mensajeUsuario = `Auto seleccionado: ${descuentosEnCoches}. \nAplica un descuento del: 10%`;
            break;
        case 3:
            marcaAuto = "FORD ESCAPE";
            descuento = 0.20
            mensajeUsuario = `Auto seleccionado: ${descuentosEnCoches}. \nAplica un descuento del: 20%`;
            break;
        default:
            marcaAuto = "No disponible";
            descuento = 0;
            mensajeUsuario = `No has seleccionado un auto válido.`;
        }
        
        console.log(mensajeUsuario);
          
        // Mostrar en html
        document.getElementById("descuentoFinal").innerHTML = mensajeUsuario;
    }
    

