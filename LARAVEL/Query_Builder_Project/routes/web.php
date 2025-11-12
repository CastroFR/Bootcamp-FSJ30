<?php

use App\Http\Controllers\ConsultaController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'message' => 'API de Consultas Laravel',
        'endpoints' => [
            '/insertar-datos' => 'Insertar datos de ejemplo',
            '/pedidos-usuario-2' => 'Pedidos del usuario con ID 2',
            '/pedidos-con-usuarios' => 'Pedidos con información de usuarios',
            '/pedidos-rango-100-250' => 'Pedidos entre $100 y $250',
            '/usuarios-con-r' => 'Usuarios que empiezan con R',
            '/total-pedidos-usuario-5' => 'Total pedidos usuario 5',
            '/pedidos-ordenados-desc' => 'Pedidos ordenados por total',
            '/suma-total-pedidos' => 'Suma total de pedidos',
            '/pedido-mas-economico' => 'Pedido más económico (incluye telephone)',
            '/pedidos-agrupados-usuario' => 'Pedidos agrupados por usuario',
            '/usuarios-telephone' => 'Mostrar usuarios con telephone'
        ]
    ]);
});

// Rutas para las consultas
Route::get('/insertar-datos', [ConsultaController::class, 'insertarDatosEjemplo']);
Route::get('/pedidos-usuario-2', [ConsultaController::class, 'pedidosUsuario2']);
Route::get('/pedidos-con-usuarios', [ConsultaController::class, 'pedidosConUsuarios']);
Route::get('/pedidos-rango-100-250', [ConsultaController::class, 'pedidosRango100a250']);
Route::get('/usuarios-con-r', [ConsultaController::class, 'usuariosNombreEmpiezaConR']);
Route::get('/total-pedidos-usuario-5', [ConsultaController::class, 'totalPedidosUsuario5']);
Route::get('/pedidos-ordenados-desc', [ConsultaController::class, 'pedidosConUsuariosOrdenados']);
Route::get('/suma-total-pedidos', [ConsultaController::class, 'sumaTotalPedidos']);
Route::get('/pedido-mas-economico', [ConsultaController::class, 'pedidoMasEconomico']);
Route::get('/pedidos-agrupados-usuario', [ConsultaController::class, 'pedidosAgrupadosPorUsuario']);
Route::get('/usuarios-telephone', [ConsultaController::class, 'usuariosConTelephone']);