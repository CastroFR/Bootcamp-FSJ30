<?php
/*
Ejercicio 3:


Crear un programa donde sea posible añadir diferentes armas a ciertos personajes de videojuegos.
Debes utilizar al menos dos personajes para este ejercicio.


Para llevar a cabo esta tarea, aplica el patrón de diseño Decorator.
*/


// Interfaz Personaje
interface Personajee {
    public function descripcion();
}


// Clase PersonajeBase
class PersonajeBase implements Personajee {
    private $nombre;


    public function __construct($nombre) {
        $this->nombre = $nombre;
    }


    public function descripcion() {
        return "Personaje: " . $this->nombre;
    }
}


// Clase DecoradorArma
class DecoradorArma implements Personajee {
    protected $personaje;
    protected $arma;


    public function __construct(Personajee $personaje, $arma) {
        $this->personaje = $personaje;
        $this->arma = $arma;
    }


    public function descripcion() {
        return $this->personaje->descripcion() . " con arma: " . $this->arma;
    }
}


// Ejemplo de uso
$personaje1 = new PersonajeBase("Guerrero");
$personajeConEspada = new DecoradorArma($personaje1, "Espada");
echo $personajeConEspada->descripcion() . PHP_EOL;
$personaje2 = new PersonajeBase("Arquero");
$personajeConArco = new DecoradorArma($personaje2, "Arco");
echo $personajeConArco->descripcion() . PHP_EOL;




?>