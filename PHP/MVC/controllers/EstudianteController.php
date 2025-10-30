<?php
require_once './models/Estudiante.php';
require_once './config/Database.php';
require_once './interfaces/EstudianteModelInterface.php';

class EstudianteController {
    private $estudianteModel;

    // Ahora el constructor recibe el modelo a traves de inyeccion de dependencias
    public function __construct(EstudianteModelInterface $model) {
        $this->estudianteModel = $model;
    }

    // Este método ayuda a crear el controlador cuando lo necesitemos
    public static function crear() {
        $db = (new Database())->getConnection();
        $model = new Estudiante($db);
        return new self($model);
    }

    // vamos a crear los metodos de manejar la logica para despues darle los datos a las vistas

    public function read(){
        $estudiantes = $this->estudianteModel->getAll();
        include_once './views/home.php';
    }

    public function create(){
        include_once './views/create.php';
    }    
}

?>