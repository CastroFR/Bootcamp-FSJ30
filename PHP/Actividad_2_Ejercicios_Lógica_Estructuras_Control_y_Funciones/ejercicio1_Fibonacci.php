<?php

echo "\n"."-Problema de la serie Fibonacci:"."\n";
/* Problema de la serie Fibonacci:
Escribe una función llamada generar Fibonacci que reciba un número n como parámetro 
y genere los primeros n términos de la serie Fibonacci. La serie comienza con 0 y 1, y 
cada término subsiguiente es la suma de los dos anteriores. 
*/

function generarFibonacci($n) {
    $fibonacci = [];
    
    if ($n <= 0) {
        return $fibonacci; // Retorna un array vacío si n es menor o igual a 0
    } elseif ($n == 1) {
        $fibonacci[] = 0; // Si n es 1, retorna solo el primer término
        return $fibonacci;
    }
    
    // Inicializa los primeros dos términos de la serie
    $fibonacci[] = 0;
    $fibonacci[] = 1;
    
    // Genera los términos restantes de la serie
    for ($i = 2; $i < $n; $i++) {
        $nextTerm = $fibonacci[$i - 1] + $fibonacci[$i - 2];
        $fibonacci[] = $nextTerm;
    }
    
    return $fibonacci;
}
// Ejemplo de uso
$n = 10; // Cambia este valor para generar más o menos términos
$fibonacciSeries = generarFibonacci($n);
echo "Los primeros $n términos de la serie Fibonacci son: " . implode(", ", $fibonacciSeries) . ".\n";


?>

