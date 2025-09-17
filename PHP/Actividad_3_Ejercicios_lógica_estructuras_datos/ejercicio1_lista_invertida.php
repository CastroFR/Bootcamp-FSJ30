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

?>