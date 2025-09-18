<?php

/*   Problema de Lista Invertida:
Escribe un programa que tome un array de números y devuelva una nueva lista que
contenga los mismos elementos en orden inverso. */

function invertirLista($lista) {
    $listaInvertida = array();
    for ($i = count($lista) - 1; $i >= 0; $i--) {
        $listaInvertida[] = $lista[$i];
    }
    return $listaInvertida;
}
$numeros = array(1, 2, 3, 4, 5);
$listaInvertida = invertirLista($numeros);
print_r($listaInvertida);

// **************************
// Forma vista en clase =>

function invertirLista2($array){
    $arrayNuevo = [];
    for($i = count($array) - 1; $i >= 0; $i--){
        $arrayNuevo[] = $array[$i];
    }
    return $arrayNuevo;
}
$numerosPrueba = [1,2,3,4,5];
$resultado = invertirLista2($numerosPrueba);
print_r($resultado);

?>