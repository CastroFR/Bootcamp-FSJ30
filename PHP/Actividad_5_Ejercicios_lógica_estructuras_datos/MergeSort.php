<?php
/*
2 - Problema de Ordenar Lista con Merge Sort:

Implementa una función que ordene una lista de palabras alfabéticamente
utilizando el algoritmo Merge Sort. 
Muestra la lista antes y después de aplicar el algoritmo.

******************************
******* NOTA IMPORTANTE*******
******************************

¿Cómo funciona?
- Divide la lista en mitades hasta tener elementos individuales
- Luego combina (merge) las mitades ordenándolas
- Es un algoritmo de "divide y vencerás"
*/

function mergesortListaPalabras($lista) {
    // Caso base: si la lista tiene 1 elemento o menos, ya está ordenada
    if (count($lista) <= 1) {
        return $lista;
    }
    
    // Dividir la lista en mitades
    $puntoMedio = floor(count($lista) / 2);
    $izquierda = array_slice($lista, 0, $puntoMedio);
    $derecha = array_slice($lista, $puntoMedio);
    
    // Ordenar recursivamente cada mitad
    $izquierda = mergesortListaPalabras($izquierda);
    $derecha = mergesortListaPalabras($derecha);
    
    // Combinar las mitades ordenadas
    return merge($izquierda, $derecha);
}

function merge($izquierda, $derecha) {
    $resultado = [];
    $i = 0; // índice para izquierda
    $j = 0; // índice para derecha
    
    // Combinar mientras haya elementos en ambos arrays
    while ($i < count($izquierda) && $j < count($derecha)) {
        // Comparar strings (orden alfabético)
        if ($izquierda[$i] <= $derecha[$j]) {
            $resultado[] = $izquierda[$i];
            $i++;
        } else {
            $resultado[] = $derecha[$j];
            $j++;
        }
    }
    
    // Agregar elementos restantes de izquierda
    while ($i < count($izquierda)) {
        $resultado[] = $izquierda[$i];
        $i++;
    }
    
    // Agregar elementos restantes de derecha
    while ($j < count($derecha)) {
        $resultado[] = $derecha[$j];
        $j++;
    }
    
    return $resultado;
}

// Probar la función
$palabras = ["zorro", "dinosaurio", "casa", "ballena", "avión", "nube"];
echo "Lista original: " . implode(", ", $palabras) . "\n";

$palabrasOrdenadas = mergesortListaPalabras($palabras);
echo "Lista ordenada alfabéticamente: " . implode(", ", $palabrasOrdenadas) . "\n";

?>