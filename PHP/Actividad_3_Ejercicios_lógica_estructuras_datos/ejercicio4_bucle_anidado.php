<?php

/*   Problema de Bucle Anidado:
Escribe un programa que utilice bucles anidados para imprimir un patrón de
asteriscos en forma de pirámide. */

$altura = 5; // Altura de la pirámide
for ($i = 1; $i <= $altura; $i++) {
    // Imprimir espacios
    for ($j = $altura - $i; $j > 0; $j--) {
        echo " ";
    }
    // Imprimir asteriscos
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    // Nueva línea después de cada fila
    echo "\n";
}
?>
