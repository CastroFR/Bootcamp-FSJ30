<?php

class MenuTienda
{
    function mostrarMenu() {} // SÍ

    function agregarProductoCarrito() {} // NO

    function sumarTotalCarrito() {} // NO

    function eliminarUsuario() {} // NO

    function logIn() {} // NO

    function logOut() {} // NO

    function registerUsuario() {} // NO
}

class Carrito
{
    function agregarProductoCarrito() {} // SI

    function sumarTotalCarrito() {} // SI
}

class Sesion
{
    function logIn() {} // SI

    function logOut() {} // SI
}

class Usuario
{
    function eliminarUsuario() {} // SI

    function registerUsuario() {} // SI
}
