<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Pedido;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConsultaController extends Controller
{
    /**
     * 1. Insertar registros de ejemplo CON TELEPHONE
     */
    public function insertarDatosEjemplo()
    {
        // Crear usuarios CON TELEPHONE
        $usuarios = [
            ['name' => 'Roberto García', 'email' => 'roberto@email.com', 'telephone' => '+1234567890'],
            ['name' => 'Maria Rodriguez', 'email' => 'maria@email.com', 'telephone' => '+1234567891'],
            ['name' => 'Carlos López', 'email' => 'carlos@email.com', 'telephone' => '+1234567892'],
            ['name' => 'Rosa Martinez', 'email' => 'rosa@email.com', 'telephone' => '+1234567893'],
            ['name' => 'Pedro Sánchez', 'email' => 'pedro@email.com', 'telephone' => '+1234567894'],
        ];

        foreach ($usuarios as $usuario) {
            User::create($usuario);
        }

        // Crear pedidos
        $pedidos = [
            ['user_id' => 1, 'producto' => 'Laptop', 'cantidad' => 1, 'total' => 150.00],
            ['user_id' => 1, 'producto' => 'Mouse', 'cantidad' => 2, 'total' => 50.00],
            ['user_id' => 2, 'producto' => 'Tablet', 'cantidad' => 1, 'total' => 200.00],
            ['user_id' => 2, 'producto' => 'Teclado', 'cantidad' => 1, 'total' => 80.00],
            ['user_id' => 3, 'producto' => 'Monitor', 'cantidad' => 1, 'total' => 300.00],
            ['user_id' => 4, 'producto' => 'Smartphone', 'cantidad' => 1, 'total' => 120.00],
            ['user_id' => 5, 'producto' => 'Auriculares', 'cantidad' => 3, 'total' => 150.00],
            ['user_id' => 5, 'producto' => 'Cargador', 'cantidad' => 2, 'total' => 40.00],
        ];

        foreach ($pedidos as $pedido) {
            Pedido::create($pedido);
        }

        return "Datos de ejemplo insertados correctamente";
    }

    /**
     * 2. Recupera todos los pedidos asociados al usuario con ID 2
     * Usando Eloquent ORM
     */
    public function pedidosUsuario2()
    {
        // Método 1: Usando Eloquent ORM
        $pedidos = Pedido::where('user_id', 2)->get();
        
        // Método 2: Usando la relación del modelo User
        // $pedidos = User::find(2)->pedidos;
        
        return $pedidos;
    }

    /**
     * 3. Obtén la información detallada de los pedidos, incluyendo 
     * el nombre, correo electrónico Y TELÉFONO de los usuarios
     * Usando Eloquent ORM con eager loading
     */
    public function pedidosConUsuarios()
    {
        // NOTA: Yo he Incluido telephone extra para practicidad
        $pedidos = Pedido::with('user:id,name,email,telephone')->get();
        return $pedidos;
    }

    /**
     * 4. Recupera todos los pedidos cuyo total esté en el rango de $100 a $250
     * Usando Query Builder
     */
    public function pedidosRango100a250()
    {
        $pedidos = DB::table('pedidos')
                    ->whereBetween('total', [100, 250])
                    ->get();
        
        return $pedidos;
    }

    /**
     * 5. Encuentra todos los usuarios cuyos nombres comiencen con la letra "R"
     * Usando Eloquent ORM
     */
    public function usuariosNombreEmpiezaConR()
    {
        $usuarios = User::where('name', 'like', 'R%')->get();
        return $usuarios;
    }

    /**
     * 6. Calcula el total de registros en la tabla de pedidos para el usuario con ID 5
     * Usando Query Builder
     */
    public function totalPedidosUsuario5()
    {
        $total = DB::table('pedidos')
                  ->where('user_id', 5)
                  ->count();
        
        return "Total de pedidos del usuario 5: " . $total;
    }

    /**
     * 7. Recupera todos los pedidos junto con la información de los usuarios, 
     * ordenándolos de forma descendente según el total del pedido
     * Usando Eloquent ORM
     */
    public function pedidosConUsuariosOrdenados()
    {
        $pedidos = Pedido::with('user')
                        ->orderBy('total', 'desc')
                        ->get();
        
        return $pedidos;
    }

    /**
     * 8. Obtén la suma total del campo "total" en la tabla de pedidos
     * Usando Query Builder
     */
    public function sumaTotalPedidos()
    {
        $sumaTotal = DB::table('pedidos')->sum('total');
        return "Suma total de todos los pedidos: $" . $sumaTotal;
    }

    /**
     * 9. Encuentra el pedido más económico, junto con el nombre del usuario asociado
     * Usando Eloquent ORM
     */
    public function pedidoMasEconomico()
    {
        // NOTA: Incluyo el campo telephone del usuario de igual manera que el caso anterior
        $pedido = Pedido::with('user:id,name,telephone')
                       ->orderBy('total', 'asc')
                       ->first();
        
        return $pedido;
    }

    /**
     * 10. Obtén el producto, la cantidad y el total de cada pedido, 
     * agrupándolos por usuario
     * Usando Query Builder
     */
    public function pedidosAgrupadosPorUsuario()
    {
        $resultados = DB::table('pedidos')
                       ->join('users', 'pedidos.user_id', '=', 'users.id')
                       ->select(
                           'users.name as usuario',
                           'users.telephone', 
                           'pedidos.producto',
                           'pedidos.cantidad',
                           'pedidos.total'
                       )
                       ->orderBy('users.name')
                       ->get()
                       ->groupBy('usuario');
        
        return $resultados;
    }

    /**
     * INCLUYO UNA CONSULTA EXTRA: Acá muestro los usuarios con sus datos respectivos agregando el campo de telefono
     */
    public function usuariosConTelephone()
    {
        $usuarios = User::select('id', 'name', 'email', 'telephone')->get();
        return $usuarios;
    }
}