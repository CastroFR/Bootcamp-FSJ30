<?php

// Principio de responsabilidad única ->
// Buscamos que cada parte (clase, componente, etc..) de nuestro código se dedique y funcione
// para una sola cosa.
// Ejemplo:  En React haciamos la modularización de codigo en archivos, segun funcionalidad.

class MenuTienda
{
// LOS si o no, son para ver que metoos si van con la clase MenuTienda.
    function mostrarMenu() {} // SÍ

    function agregarProductoCarrito() {} // NO

    function sumarTotalCarrito() {} // NO

    function eliminarUsuario() {} // NO

    function logIn() {} // NO

    function logOut() {} // NO

    function registerUsuario() {} // NO
}

// la clase Menu tienda tiene muchos metodos, es decir un problema grande
// por que tiene muchas responsabilidades.