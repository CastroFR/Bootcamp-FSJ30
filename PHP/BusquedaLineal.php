<?php

/*
DATOS A USAR: EJERCICIO BUSQUEDA LINEAL

$pupusas = ["queso", "frijol", "revuelta", "loroco", "chicharrón", "ayote", "ajo"];
LO QUE DEBEN CONSTRUIR DESDE CERO:
1. Una función llamada buscarPupusa($listaPupusas, $pupusaBuscada)
2. La función debe usar búsqueda lineal (revisar una por una)
3. Si encuentra la pupusa, devolver la posición donde está
4. Si no la encuentra, devolver -1
5. Crear código para probar la función con diferentes pupusas

*********************************************************************

function buscarPupusa($listaPupusas, $pupusaBuscada)
{

    for ($i = 0; $i < count($listaPupusas); $i++) {

        if ($listaPupusas[$i] === $pupusaBuscada) {
            return $i;
        }
    }
    return -1;
}

// Código para probar la función
$pupusas = ["queso", "frijol", "revuelta", "loroco", "chicharrón", "ayote", "ajo"];

$posicionPupusa = buscarPupusa($pupusas, "queso");


// Si encuentra la pupusa, devolver la posición donde está
if ($posicionPupusa !== -1) {
    echo "Encontré la pupusa solicitada en la posición: " . $posicionPupusa . "\n";
    echo "Su busqueda indica que en la lista aparece como: " . $pupusas[$posicionPupusa] . "\n";
} else {
    // Si no la encuentra, devolver -1
    echo "La pupusa solicitada no se encuentra\n";
}

*********************************************************************
*/

// Añadiendo menu para mejorar la logica
function buscarPupusa($listaPupusas, $pupusaBuscada)
{
    for ($i = 0; $i < count($listaPupusas); $i++) {

        if ($listaPupusas[$i] === $pupusaBuscada) {
            return $i;
        }
    }
    return -1;
}

// Código para probar la función
$pupusas = ["queso", "frijol", "revuelta", "loroco", "chicharrón", "ayote", "ajo"];

// Menu structure
echo "¡Bienvenido a Pupusería FSJ30!\n";
echo "Por favor seleccione una opción:\n";
echo "1 - Ver menú\n";
echo "2 - Pedir pupusas\n";

$opcion = readline("Ingrese su opción (1 o 2): ");

switch ($opcion) {
    case '1':
        echo "\nMenú de Pupusas Disponibles:\n";
        foreach ($pupusas as $index => $pupusa) {
            echo ($index + 1) . ". Pupusa de " . $pupusa . "\n";
        }
        break;
        
    case '2':
        $pupusaPedida = readline("¿Qué pupusa desea ordenar?: ");
        $posicionPupusa = buscarPupusa($pupusas, $pupusaPedida);
        
        // Si encuentra la pupusa, devolver la posición donde está
        if ($posicionPupusa !== -1) {
            echo "Encontré la pupusa solicitada en la posición: " . $posicionPupusa . "\n";
            echo "Su busqueda indica que en la lista aparece como: " . $pupusas[$posicionPupusa] . "\n";
        } else {
            // Si no la encuentra, devolver -1
            echo "La pupusa solicitada no se encuentra en nuestro menú\n";
        }
        break;
        
    default:
        echo "Opción no válida\n";
        break;
}
