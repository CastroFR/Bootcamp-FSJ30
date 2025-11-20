<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // registrar usuarios
    public function register(Request $request){
        try{
            // Validamos los datos del request o la peticion
        $request->validate([
            'name' => 'required|string|max:255|unique:users|alpha|min:8|regex:/^[a-zA-Z0-9._%+-]+$/',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'status' => 201
        ],201);

        } catch (\Exception $error) {
            return response()->json([
                'message' => 'Error registering user',
                'error' => $error->getMessage()
            ]);
        }
    }

    public function login(Request $request){
        // Validamos los datos del request o la peticion
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:8'
        ]);

        //Extraemos solo los datos que vamos a trabajar del body de la peticion
        $credentials = $request->only('email', 'password');

        //Intentar autenticar al usuario con las credenciales
        //Auth::attemp => devuelve tru o false, dependiendo si las credenciales son correctas
        if (Auth::attempt($credentials)) {
            //Si las credenciales funcionaron obtenemos el usuario
            $user = $request->user();
            //$user = Auth::user();

            //Declaramos el tiemppo de expiracion del token, con Carbon
            $expirationTimeToken = Carbon::now()->addMinutes(30); //3 horas tiempo de expiracion

            //Generamos un token de acceso para el usuario autenticado
            
            $token = $user->createToken('auth_token',['server:update'],$expirationTimeToken)->plainTextToken;

            return response()->json([
                'message' => 'User logged successfully',
                'user' => $user,
                'token' => $token,
                'status' => 200
            ],200);
        }
    }

    public function logout(Request $request){
        // Obtenemos el user logeado en este caso a traves del request (no se pasa en el body) en el authorization
        $user = $request->user();

        // Revocamos ese token,  hace que el token quede invalidado y que el usuario tenga que generar uno nuevo
        $user->currentAccessToken()->delete();

        //Revocamos TODOS los tokens activos => sirve para cambios de contrase;a o una funcionalidad en especifico de cerrar todas las sesiones del usuario
        //$user->tokens()->delete

        return response()->json([
            'message' => 'User logged out successfully',
            'status' => 200
        ],200);
    }
}
