<?php
/*
3 - Problema de Ordenar Lista con Insertion Sort:

Crea un script que ordene una lista de nombres en orden alfabético
utilizando el algoritmo Insertion Sort.
Muestra la lista antes y después de aplicar el algoritmo.

******************************
******* NOTA IMPORTANTE*******
******************************

¿Cómo funciona?
- Toma un elemento y lo inserta en la posición correcta dentro de la parte ya ordenada
- Similar a como ordenamos cartas en la mano
*/

function insertionsortListaNombres($lista) {
    $longitudArray = count($lista);
    
    // Empezar desde el segundo elemento
    for ($i = 1; $i < $longitudArray; $i++) {
        $clave = $lista[$i]; // Elemento actual a insertar
        $j = $i - 1;
        
        // Mover elementos mayores que la clave una posición adelante
        while ($j >= 0 && $lista[$j] > $clave) {
            $lista[$j + 1] = $lista[$j];
            $j = $j - 1;
        }
        
        // Insertar la clave en la posición correcta
        $lista[$j + 1] = $clave;
    }
    
    return $lista;
}

// Probar la función
$nombres = ["María", "Carlos", "Ana", "Pedro", "Luisa", "Juan", "Beatriz"];
echo "Lista original: " . implode(", ", $nombres) . "\n";

$nombresOrdenados = insertionsortListaNombres($nombres);
echo "Lista ordenada alfabéticamente: " . implode(", ", $nombresOrdenados) . "\n";

?>