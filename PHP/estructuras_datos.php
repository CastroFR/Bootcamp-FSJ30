<?php 

//Arrays
//Declaracion
//Array indexados
$array = [1,2,3,4,5];
$array2 = array();
$array3 = new ArrayObject();

//Array asociativos
$arrayAsociativo = [
    "nombre" => "Jairo",
    "edad" => 30,
    "departamento" => "La libertad"
];

print_r($arrayAsociativo["nombre"] . "\n");

//Array propiedades y metodos

//Saber el largo del array
print count($array)."\n";

//Agregar un elemento al final del array
array_push($array, 6);
$array[] = 7;

//Agregar un elemento al inicio del array
array_unshift($array, 0);

print_r($array);

//Eliminar el ultimo elemento del array
array_pop($array);
print_r($array);

//Eliminar el primer elemento del array
array_shift($array);
print_r($array);

//Recorrer un array
foreach($array as $valor){
    echo "Valor: {$valor}\n";
}

//Arrays multidimensionales
$arrayMultimensional = [
    "nombre" => "Jairo",
    "edad" => 30,
    "hobbies" => ["Programar", "Leer", "Correr", "otros" => [ "Jugar jueguitos" => ["LOL","DOTA2","CS2"]]]

];

print_r($arrayMultimensional);


//Clases y objetos 

class Persona {
    //Atributos o propiedades
    private $nombre;
    private $edad;

    //constructor
    function __construct($nombreParam, $edadParam){
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
    }

    //Metodos o funciones
    public function getNombre() {
        return $this->nombre;
    }

    public function getEdad() {
        return $this->edad;
    }

    /**
     * Set the value of nombre
     * @param string $nombre
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Set the value of edad
     * @param int $edad
     * @return  self
     */ 
    public function setEdad($edad)
    {
        $this->edad = $edad;

        return $this;
    }

    

	
}

//Crear un objeto
$persona1 = new Persona("Jairo", 30);

//Acceder a los metodos del objeto
echo $persona1->getNombre() . "\n";


//LIFO -> Stack -> Last In First Out


//FIFO -> Queue -> First In First Out

?>