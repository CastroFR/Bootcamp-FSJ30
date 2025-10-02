<?php
function quickSort($array) {
    // Caso base: arrays con 0 o 1 elemento ya están ordenados
    if (count($array) < 2) {
        return $array;
    }
    
    $pivot = $array[0]; // Selección del pivote (puede optimizarse)
    $left = $right = [];
    
    // Partición: elementos menores a izquierda, mayores a derecha
    for ($i = 1; $i < count($array); $i++) {
        if ($array[$i] < $pivot) {
            $left[] = $array[$i];
        } else {
            $right[] = $array[$i];
        }
    }
    
    // Recursión y combinación de resultados
    return array_merge(quickSort($left), [$pivot], quickSort($right));
}

// Ejemplo de uso
$data = [10, 5, 8, 3, 1, 7];
echo "Array original: " . implode(", ", $data) . "\n";
$sortedData = quickSort($data);
echo "Array ordenado: " . implode(", ", $sortedData);
// Output: Array ordenado: 1, 3, 5, 7, 8, 10
?>