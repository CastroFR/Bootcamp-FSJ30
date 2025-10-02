<?php

/*
Ordenamiento de datos con algoritmos en PHP

¿Ques es la complejidad de un algoritmo?
se refire a la cantidad de recursos que necesita para crear un recurso, medido a la cantidad de datos que voy a procesar.

Algoritmos de ordenamiento:
1. Burbuja (Bubble Sort)


3. Quicksort (Quick Sort)
4. Mergesort (Merge Sort)
5. Heapsort (Heap Sort)

Ordenacion
Su finalidad es clasificar datos mas que todo arreglos. Organizar cosas por tamaño, color etc.

*/

// EJEMPLO SENCILLO DE BUSQUEDA LINEAL
function busquedaLineal($lista, $elementoBuscado) {
    // neceito busca una persona de los participantes del FSJ50, ELEMENTO POR ELEMENTO

    for ($i = 0; $i < count($lista); $i++) {
        
        if($lista[$i] === $elementoBuscado) {
            return $i; // Retorna la posicion del elemento
        }
    }
    return -1; // No encontramos el elemento
}

// Ejemplo práctico con estudiantes del FSJ30
$estudiantes = [
    "Alejandro", "Alvin", "Andrea", "Alejandra"
];

// creamos varible para
$posicion = busquedaLineal($estudiantes, "Andrea");

if ($posicion !== -1) {
    echo "Encontre a Andrea en la posición: " . $posicion . "\n";
    echo "En la lista esta como: " . $estudiantes[$posicion] . "\n";
}else {
    echo "Andrea no esta en la lista del FSJ30\n";
}

// Crear