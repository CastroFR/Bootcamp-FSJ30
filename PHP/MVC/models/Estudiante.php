<?php
require_once './interfaces/EstudianteModelInterface.php';

// este mdelo lo vamos a usar para traer datos de la tabla estudiante de la BD
class Estudiante implements EstudianteModelInterface {
    private $id;
    private $nombre;
    private $edad;
    private $promedio;
    private $id_curso;
    private $table_name = "estudiantes"; // este campo delimita el nombre de la tabla en la BD
    private $db_connection;

    public function __construct($db){
        $this->db_connection = $db;
    }
    
    // vamos a crear el metodo 1
    public function getAll(){
        $query = "SELECT * FROM {$this->table_name} "; // Esta query se repetira en todos los metodos
        $sentence = $this->db_connection->prepare($query); // Esta consulta prepara la consulta en un objeto para en un GBD - Gestor de base de datos 
        $sentence->execute(); // Esta linea ejecuta la consulta
        return $sentence->fetchAll(PDO::FETCH_ASSOC); // esta linea devueelve todos los resultados en un array asociativo
        // fetchAll -> 
        // PDO -> Representa una conexión entre PHP y un servidor de base de datos. Admit hasta 12 tipos de BD
        // :: -> Nos permiten ejecutar metodos estaticos, y ejecutarlos desde la clase sin crear un nuevo objeto
        // FETCH_ASSOC -> 
    }
        
    
}

?>