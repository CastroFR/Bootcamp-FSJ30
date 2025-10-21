<?php
/*
Ejercicio 2:

Estamos trabajando con distintas versiones de sistemas operativos Windows 7 y Windows 10.
Al compartir archivos como Word, Excel, Power Point, surgen problemas al abrirlos en Windows 10
debido a la falta de compatibilidad con la versión Windows 7. 
Debes crear un programa donde Windows 10 pueda aceptar estos archivos independientemente de que sean de versiones anteriores.

Para ello, aplica el patrón de diseño Adapter.
*/

// Interfaz Archivos
interface Archivo {
    public function abrir();
}

// Clase ArchivoWordWindows7
class ArchivoWordWindows7 implements Archivo {
    public function abrir() {
        return "Abriendo archivo Word en Windows 7";
    }
}

// Clase ArchivoExcelWindows7
class ArchivoExcelWindows7 implements Archivo {
    public function abrir() {
        return "Abriendo archivo Excel en Windows 7";
    }
}

// Clase ArchivoPowerPointWindows7
class ArchivoPowerPointWindows7 implements Archivo {
    public function abrir() {
        return "Abriendo archivo PowerPoint en Windows 7";
    }
}

// Clase Adaptador para Windows 10
class AdaptadorWindows10 implements Archivo {
    private $archivoWindows7;

    public function __construct(Archivo $archivoWindows7) {
        $this->archivoWindows7 = $archivoWindows7;
    }

    public function abrir() {
        // Aquí se podría agregar lógica adicional para adaptar el archivo a Windows 10
        return $this->archivoWindows7->abrir() . " - Adaptado para Windows 10";
    }
}

// Ejemplo de uso
$archivos = [
    new AdaptadorWindows10(new ArchivoWordWindows7()),
    new AdaptadorWindows10(new ArchivoExcelWindows7()),
    new AdaptadorWindows10(new ArchivoPowerPointWindows7()),
];
foreach ($archivos as $archivo) {
    echo $archivo->abrir() . PHP_EOL;
}





?>