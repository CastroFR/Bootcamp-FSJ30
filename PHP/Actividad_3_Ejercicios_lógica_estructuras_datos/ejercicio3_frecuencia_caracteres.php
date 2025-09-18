<?php

/*  Problema de Frecuencia de Caracteres:
Implementa una función que tome una cadena de texto y devuelva un array 
asociativo que muestre la frecuencia de cada carácter en la cadena. */

function frecuenciaCaracteres($cadena) {
    $frecuencia = array();
    
    // Recorremos cada carácter en la cadena
    for ($i = 0; $i < strlen($cadena); $i++) {
        $caracter = $cadena[$i];
        
        // Si el carácter ya está en el array, incrementamos su contador
        if (array_key_exists($caracter, $frecuencia)) {
            $frecuencia[$caracter]++;
        } else {
            // Si no está, lo añadimos con un contador inicial de 1
            $frecuencia[$caracter] = 1;
        }
    }
    
    return $frecuencia;
}
// Ejemplo de uso
$cadena = "hola mundo";
$resultado = frecuenciaCaracteres($cadena);
print_r($resultado);


// **************************
// Forma vista en clase =>

function contarFrecuenciaCaracteres($StringParam){
    $frecuenciaCaracter = [];

    // Cortar el string en Caracteres -> str_split

    $caracteres = str_split($StringParam);
    //print_r($caracteres);

    foreach($caracteres as $caracter){
        // isset() -> DETERMINA UN VALOR EXISTE, SI ESO PASA NOS DA UN "TRUE"
        if(isset($frecuenciaCaracter[$caracter])){
            $frecuenciaCaracter[$caracter]++;
        }else{
            $frecuenciaCaracter[$caracter] = 1;
        }
    }
    return $frecuenciaCaracter;
}

print_r(contarFrecuenciaCaracteres("Holaa como estamos"));


?>