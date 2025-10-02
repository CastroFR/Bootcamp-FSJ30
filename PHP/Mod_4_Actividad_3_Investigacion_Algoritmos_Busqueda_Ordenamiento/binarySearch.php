<?php
function binarySearch($array, $target) {
    $left = 0;
    $right = count($array) - 1;
    
    while ($left <= $right) {
        $mid = floor(($left + $right) / 2); // Calcula punto medio
        
        if ($array[$mid] == $target) {
            return $mid; // Elemento encontrado
        }
        
        if ($array[$mid] < $target) {
            $left = $mid + 1; // Buscar en mitad derecha
        } else {
            $right = $mid - 1; // Buscar en mitad izquierda
        }
    }
    
    return -1; // Elemento no encontrado
}

// Ejemplo de uso
$sortedArray = [1, 3, 5, 7, 9, 11];
$target = 7;

$result = binarySearch($sortedArray, $target);

if ($result != -1) {
    echo "Elemento $target encontrado en el índice: $result";
} else {
    echo "Elemento $target no encontrado en el array";
}
// Output: Elemento 7 encontrado en el índice: 3
?>