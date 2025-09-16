<?php

echo "\n"."-Problema de Palíndromos:"."\n";
/* Problema de Palíndromos:
Implementa una función llamada esPalindromo que determine si una cadena de texto
dada es un palíndromo. Un palíndromo es una palabra, frase o secuencia que se lee igual en ambas direcciones.
*/

function esPalindromo($cadena) {
    // Eliminar espacios y convertir a minúsculas
    $cadena = strtolower(str_replace(' ', '', $cadena));
    
    // Obtener la longitud de la cadena
    $longitud = strlen($cadena);
    
    // Comparar caracteres desde el inicio y el final hacia el centro
    for ($i = 0; $i < $longitud / 2; $i++) {
        if ($cadena[$i] !== $cadena[$longitud - 1 - $i]) {
            return false; // No es un palíndromo
        }
    }
    
    return true; // Es un palíndromo
}
// Ejemplos de uso
$texto1 = "Reconocer";
$texto2 = "Hola Mundo";
echo esPalindromo($texto1) ? "'$texto1' es un palíndromo.\n" : "'$texto1' no es un palíndromo.\n";
echo esPalindromo($texto2) ? "'$texto2' es un palíndromo.\n" : "'$texto2' no es un palíndromo.\n";
?>