<?php

echo "\n"."-Problema de números Primos:"."\n";
/* Problema de números Primos:
Crea una función llamada esPrimo que determine si un número dado es primo o no.
Un número primo es aquel que solo es divisible por 1 y por sí mismo. 
*/

function esPrimo($numero) {
    if ($numero <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false; // Si es divisible por algún número, no es primo
        }
    }
    return true; // Si no es divisible por ningún número, es primo
}   
// Ejemplo de uso
$numero = 29;
if (esPrimo($numero)) {
    echo "$numero es un número primo.";
} else {
    echo "$numero no es un número primo.";
}

?>