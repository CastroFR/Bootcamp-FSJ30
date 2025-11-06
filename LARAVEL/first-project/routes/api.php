<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
// http://localhost:8000/api

//1era forma de utilizar el controlador
//Route::get('/products', [App\Http\Controllers\ProductController::class, 'index']);
//2da forma de utilizar el controlador
// http://localhost:8000/api/products
Route::get('/products', [ProductController::class, 'index']); //obtenemos datos
// http://localhost:8000/api/products
Route::post('/products', [ProductController::class, 'store']); //enviamos datos
