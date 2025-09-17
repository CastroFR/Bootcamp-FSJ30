<?php

/*  Problema de Suma de Números Pares:
Crea un script que sume todos los números pares en un array de números enteros. */

// Función para sumar números pares en un array
function sumarNumerosPares($numeros) {
    $suma = 0;
    foreach ($numeros as $numero) {
        if ($numero % 2 == 0) { // Verifica si el número es par
            $suma += $numero; // Suma el número par
        }
    }
    return $suma;
}
// Ejemplo de uso
$numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$resultado = sumarNumerosPares($numeros);
echo "La suma de los números pares es: " . $resultado;
?>
