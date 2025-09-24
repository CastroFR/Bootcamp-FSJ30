<?php

//Arrays
//Declaracion
//Array indexados
$array = [1, 2, 3, 4, 5];
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
print count($array) . "\n";

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
foreach ($array as $valor) {
    echo "Valor: {$valor}\n";
}

//Arrays multidimensionales
$arrayMultimensional = [
    "nombre" => "Jairo",
    "edad" => 30,
    "hobbies" => ["Programar", "Leer", "Correr", "otros" => ["Jugar jueguitos" => ["LOL", "DOTA2", "CS2"]]]

];

print_r($arrayMultimensional);


//Clases y objetos 

class Persona
{
    //Atributos o propiedades
    private $nombre;
    private $edad;

    //constructor
    function __construct($nombreParam, $edadParam)
    {
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
    }

    //Metodos o funciones
    public function getNombre()
    {
        return $this->nombre;
    }

    public function getEdad()
    {
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

class Stack
{
    private $data;

    //Constructor con parametros OPCIONALES
    function __construct($dataParams = [])
    {
        $this->data = $dataParams;
    }

    //Agregar un elemento
    function add($element)
    {
        array_push($this->data, $element);
        //$this->data[] = $element;
    }

    //Eliminar un elemento
    function remove()
    {
        return array_pop($this->data);
    }
}

$stacito = new Stack([1, 2, 3, 4]);


//FIFO -> Queue -> First In First Out

class Queue
{
    private $data;

    function __construct($dataParams = [])
    {
        $this->data = $dataParams;
    }

    //Agregar un elemento
    function add($element)
    {
        array_push($this->data, $element);
    }

    //Eliminar un elemento
    function remove()
    {
        return array_shift($this->data);
    }
}

class Node
{
    private $value;
    private $next;

    function __construct($valueParam)
    {
        $this->value = $valueParam;
        $this->next = null;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function getNext()
    {
        return $this->next;
    }

    public function setNext($next)
    {
        $this->next = $next;
    }
}

class LinkedList
{
    private $head;

    function __construct()
    {
        $this->head = null;
    }

    function add($value)
    {
        //Creamos un nuevo nodo
        $newNode = new Node($value);

        if ($this->head === null) {
            $this->head = $newNode;
        } else {
            $current = $this->head;

            //Recorremos la lista mientras el siguiente no sea nulo
            while ($current->getNext() !== null) {
                $current = $current->getNext();
            }
            //Cuando encontramos el final, agregamos el nuevo nodo
            $current->setNext($newNode);
        }
    }

    // ***************** RETO DIVIDIDO EN SALAS *****************


    //Funcion para encontrar un dato. Devolveria un mensaje si este dato existe
 /**
     * Busca un valor en la lista enlazada
     * @param mixed $value Valor a buscar
     * @return bool True si existe, False si no existe
     */
    function encontrarData($value)
    {
        $current = $this->head;

        // Recorremos toda la lista desde la cabeza
        while ($current !== null) {
            // Comparamos el valor actual con el buscado
            if ($current->getValue() === $value) {
                echo "El valor $value existe en la lista.\n";
                return true;
            }
            // Avanzamos al siguiente nodo
            $current = $current->getNext();
        }

        // Si recorrimos toda la lista sin encontrar el valor
        echo "El valor $value no se encuentra en la lista.\n";
        return false;
    }

    /**
     * Elimina un valor de la lista enlazada
     * @param mixed $value Valor a eliminar
     * @return bool True si se eliminó, False si no se encontró
     */
    function eliminarData($value)
    {
        // Caso 1: Lista vacía
        if (!$this->head) {
            echo "Lista vacía.\n";
            return false;
        }

        // Caso 2: El valor está en la cabeza
        if ($this->head->getValue() === $value) {
            $this->head = $this->head->getNext();
            echo "Valor $value eliminado.\n";
            return true;
        }

        $current = $this->head;
        
        // Buscamos el nodo anterior al que contiene el valor
        while ($current->getNext() && $current->getNext()->getValue() !== $value) {
            $current = $current->getNext();
        }

        // Caso 3: Valor no encontrado
        if (!$current->getNext()) {
            echo "Valor $value no encontrado.\n";
            return false;
        }

        // Caso 4: Eliminar nodo intermedio o final
        // Saltamos el nodo a eliminar enlazando con el siguiente
        $current->setNext($current->getNext()->getNext());
        echo "Valor $value eliminado.\n";
        return true;
    }
}

$listita = new LinkedList();
$listita->add(3);
$listita->add(1);
$listita->add(5);
$listita->encontrarData(1);
$listita->eliminarData(0);

print_r($listita);


class Nodo
{
    private $value;
    private $left;
    private $right;

    function __construct($valueParam)
    {
        $this->value = $valueParam;
        $this->left = null;
        $this->right = null;
    }

    function getValue()
    {
        return $this->value;
    }

    function getRight()
    {
        return $this->right;
    }

    function getLeft()
    {
        return $this->left;
    }

    function setRight($data)
    {
        $this->right = $data;
    }

    function setLeft($data)
    {
        $this->left = $data;
    }

    function setValue($data)
    {
        $this->value = $data;
    }
}


class BinaryThree
{
    private $root;

    function __construct($data = null)
    {
        $this->root = $data;
    }

    function insert($data)
    {
        $newNode = new Nodo($data);

        if ($this->root === null) {
            $this->root = $newNode;
            return $this->root;
        }

        $current = $this->root;

        while (true) {

            if ($newNode->getValue() > $current->getValue()) {
                if ($current->getRight() === null) {
                    $current->setRight($newNode);
                    return $newNode;
                } else {
                    $current = $current->getRight();
                }
            } else {
                if ($current->getLeft() === null) {
                    $current->setLeft($newNode);
                    return $newNode;
                } else {
                    $current = $current->getLeft();
                }
            }
        }
    }

    // ***************** RETO DIVIDIDO EN SALAS *****************

    //Funcion para encontrar un dato. Devolveria un mensaje si este dato existe
    /**
     * Busca un valor en el árbol binario
     * @param int $value Valor a buscar
     * @return bool True si existe, False si no existe
     */
    function encontrarDato($value)
    {
        $current = $this->root;

        // Recorremos el árbol mientras haya nodos que revisar
        while ($current !== null) {
            // Si encontramos el valor, mostramos mensaje y retornamos true
            if ($current->getValue() === $value) {
                echo "El valor $value existe en el árbol.\n";
                return true;
            }
            // Si el valor es menor, vamos a la izquierda; si es mayor, a la derecha
            $current = $value < $current->getValue()
                ? $current->getLeft()
                : $current->getRight();
        }

        // Si llegamos a null, el valor no existe
        echo "El valor $value no se encuentra en el árbol.\n";
        return false;
    }

    /**
     * Elimina un valor del árbol binario
     * @param int $value Valor a eliminar
     */
    function eliminarDato($value)
    {
        $this->root = $this->_eliminar($this->root, $value);
    }

    /**
     * Función auxiliar recursiva para eliminar un nodo
     * @param Nodo $nodo Nodo actual en la recursión
     * @param int $value Valor a eliminar
     * @return Nodo|null El nodo modificado después de la eliminación
     */
    private function _eliminar($nodo, $value)
    {
        // Caso base: nodo no existe
        if (!$nodo) {
            echo "Valor $value no encontrado.\n";
            return null;
        }

        // Buscar el valor en el subárbol correspondiente
        if ($value < $nodo->getValue()) {
            $nodo->setLeft($this->_eliminar($nodo->getLeft(), $value));
        } elseif ($value > $nodo->getValue()) {
            $nodo->setRight($this->_eliminar($nodo->getRight(), $value));
        } else {
            // Valor encontrado - proceder a eliminar
            echo "Valor $value eliminado.\n";
            
            // Nodo con un hijo o sin hijos
            if (!$nodo->getLeft()) return $nodo->getRight();
            if (!$nodo->getRight()) return $nodo->getLeft();
        }
        return $nodo;
    }
}

$nuevoNodo = new Nodo(10);

$arbolito = new BinaryThree($nuevoNodo);
print_r($arbolito);
echo "\n";
$arbolito->insert(17);
$arbolito->insert(19);
$arbolito->insert(13);
$arbolito->insert(5);
$arbolito->encontrarDato(5);
$arbolito->eliminarDato(5);
print_r($arbolito);
