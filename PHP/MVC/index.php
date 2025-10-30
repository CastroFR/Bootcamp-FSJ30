<?php
// este va ser el enrutador 
// este index va consumir el EstudianteController
include_once './controllers/EstudianteController.php';
$controller = EstudianteController::crear();

$action = isset($_GET['action']) ? $_GET['action'] : 'read';

switch ($action) {
    case 'read':
        $controller->read();
        break;
    case 'create':
        $controller->create();
        break;
}

echo "Vacio";
