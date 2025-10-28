<?php
/*
Ejercicio 1:


Crear un programa que contenga dos personajes: "Esqueleto" y "Zombi".
Cada personaje tendrá una lógica diferente en sus ataques y velocidad.
La creación de los personajes dependerá del nivel del juego:


- En el nivel fácil se creará un personaje "Esqueleto".
- En el nivel difícil se creará un personaje "Zombi".


Debes aplicar el patrón de diseño Factory para la creación de los personajes.
*/


// Interfaz Personaje
interface Personaje {
    public function atacar();
    public function velocidad();
}


// Clase Esqueleto
class Esqueleto implements Personaje {
    public function atacar() {
        return "El Esqueleto ataca con un arco!";
    }


    public function velocidad() {
        return "El Esqueleto es rápido.";
    }
}


// Clase Zombi
class Zombi implements Personaje {
    public function atacar() {
        return "El Zombi ataca con sus garras!";
    }


    public function velocidad() {
        return "El Zombi es lento.";
    }
}


// Clase Factory
class PersonajeFactory {
    public static function crearPersonaje($nivel) {
        if ($nivel === 'facil') {
            return new Esqueleto();
        } elseif ($nivel === 'dificil') {
            return new Zombi();
        } else {
            throw new Exception("Nivel no válido");
        }
    }
}


// Ejemplo de uso
try {
    $nivel = 'facil'; // Cambiar a 'facil' para crear un Esqueleto
    $personaje = PersonajeFactory::crearPersonaje($nivel);
   
    echo $personaje->atacar() . PHP_EOL;
    echo $personaje->velocidad() . PHP_EOL;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}




?>
