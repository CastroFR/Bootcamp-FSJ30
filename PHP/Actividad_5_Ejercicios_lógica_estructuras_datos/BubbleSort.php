<?php
/*
1 - Problema de Ordenar Lista con Bubble Sort:

Escribe un programa que ordene una lista de números de forma descendente
utilizando el algoritmo Bubble Sort. La lista puede contener duplicados 
y valores negativos.
Asegúrate de manejar estos casos y muestra la lista antes y después de aplicar el algoritmo.

******************************
******* NOTA IMPORTANTE*******
******************************

¿Cómo funciona?
- Compara elementos adyacentes y los intercambia si están en el orden incorrecto
- Repite este proceso múltiples veces hasta que no se necesiten más intercambios
- Para orden descendente: si el número actual es MENOR que el siguiente, se intercambian
*/

function bubbleSortListaDescendente($lista) {
    $longitudArray = count($lista);
    
    // Repetir el proceso n-1 veces
    for ($i = 0; $i < $longitudArray - 1; $i++) {
        $elementoIntercambiado = false;
        
        // Comparar elementos adyacentes
        for ($j = 0; $j < $longitudArray - $i - 1; $j++) {
            // Para orden DESCENDENTE: si el actual es MENOR que el siguiente
            if ($lista[$j] < $lista[$j + 1]) {
                // Intercambiar elementos
                $valorTemporal = $lista[$j];
                $lista[$j] = $lista[$j + 1];
                $lista[$j + 1] = $valorTemporal;
                $elementoIntercambiado = true;
            }
        }
        
        // Si no hubo intercambios, la lista ya está ordenada
        if (!$elementoIntercambiado) {
            break;
        }
    }
    
    return $lista;
}

// Probar la función
$numeros = [64, 34, 25, 12, 22, 11, 90, -5, 0, 34, -2];
echo "Lista original: " . implode(", ", $numeros) . "\n";

$numerosOrdenados = bubbleSortListaDescendente($numeros);
echo "Lista ordenada, algoritmo aplicado (descendente): " . implode(", ", $numerosOrdenados) . "\n";

?>