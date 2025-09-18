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


// **************************
// Forma vista en clase =>

function imprimirPiramide(){

    $filas = 5;

    //1er bucle es para la ALTURA
    // Por eso empieza en 1 y se repite hasta la cantidad de altura que queremos que tenga
    for ($i = 1; $i <= $filas; $i++){
        // 2do bucle controla los espacios en blanco antes de dibujar los astericos
        for($espacios = 1; $espacios <= $filas - $i; $espacios++){
            echo " ";
        }

        // 3er bucle controlar los asteriscos por fila
        // formula para saber cuantos asteriscos necesitamos es (2 * $i - 1)

        for($asteriscos = 1; $asteriscos <= (2 * $i - 1); $asteriscos++ ){
            echo "*";
        }
        echo "\n";
    }
}
imprimirPiramide();

?>
