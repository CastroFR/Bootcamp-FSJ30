<?php
/*
Ejercicio 4:


Tenemos un sistema donde mostramos mensajes en distintos tipos de salida,
como por consola, formato JSON y archivo TXT.
Debes crear un programa donde se muestren todos estos tipos de salidas.


Para este propósito, aplica el patrón de diseño Strategy.
*/


// Interfaz EstrategiaSalida
interface EstrategiaSalida {
    public function mostrar($mensaje);
}


// Clase SalidaConsola
class SalidaConsola implements EstrategiaSalida {
    public function mostrar($mensaje) {
        echo "Consola: " . $mensaje . PHP_EOL;
    }
}


// Clase SalidaJSON
class SalidaJSON implements EstrategiaSalida {
    public function mostrar($mensaje) {
        echo "JSON: " . json_encode(["mensaje" => $mensaje]) . PHP_EOL;
    }
}


// Clase SalidaArchivoTXT
class SalidaArchivoTXT implements EstrategiaSalida {
    private $archivo;


    public function __construct($nombreArchivo) {
        $this->archivo = $nombreArchivo;
    }


    public function mostrar($mensaje) {
        file_put_contents($this->archivo, "Archivo TXT: " . $mensaje . PHP_EOL, FILE_APPEND);
    }
}


// Clase Contexto
class Contexto {
    private $estrategia;


    public function __construct(EstrategiaSalida $estrategia) {
        $this->estrategia = $estrategia;
    }


    public function ejecutarEstrategia($mensaje) {
        $this->estrategia->mostrar($mensaje);
    }
}


// Ejemplo de uso
$mensaje = "¡Hola, Mundo!";
$contextoConsola = new Contexto(new SalidaConsola());
$contextoConsola->ejecutarEstrategia($mensaje);
$contextoJSON = new Contexto(new SalidaJSON());
$contextoJSON->ejecutarEstrategia($mensaje);
$contextoArchivo = new Contexto(new SalidaArchivoTXT("salida.txt"));
$contextoArchivo->ejecutarEstrategia($mensaje);



?>