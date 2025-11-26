<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// http://localhost:8000/api/register/user
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// http://localhost:8000/api/register
Route::post('/register',[UserController::class, 'register']);

// http://localhost:8000/api/login
Route::post('/login',[UserController::class, 'login']);

// http://localhost:8000/api/logout
Route::post('/logout',[UserController::class, 'logout'])->middleware('auth:sanctum');

/* // http://localhost:8000/api/posts
Route::get('/posts', [PostController::class, 'index'])->middleware('auth:sanctum');

Route::get('/posts', [PostController::class, 'store'])->middleware('auth:sanctum');

Route::put('/post/{id}', [PostController::class, 'update'])->middleware('auth:sanctum'); */

// http://localhost:8000/api/URI
// Route::get('URI')
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::put('/post/{id}', [PostController::class, 'update']);
    Route::delete('/post/{id}', [PostController::class, 'destroy']);
    Route::put('/post/{id}/restore', [PostController::class, 'restore']); //puede ser put o patch, de modo que entienda que es una actualizacion

    Route::delete('/user/{id}', [UserController::class, 'destroy']);
    Route::put('/user/{id}/restore', [UserController::class, 'restore']);

    Route::get('/comments', [CommentController::class, 'index']);
    Route::post('/comments', [CommentController::class, 'store']);
    Route::delete('/comment/{id}', [CommentController::class, 'destroy']);
    Route::put('/comment/{id}/restore', [CommentController::class, 'restore']);
});