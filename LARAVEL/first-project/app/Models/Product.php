<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    //
    protected $fillable =[
        'name',
        'description',
        'price'
    ];

    //Ejemplo de consulta query builder    
    public static function getAllProducts(){
        return DB::table('products')->select('name','description','price')->get();
    }

    //Ejemplo de insercion query builder
    public static function saveProduct($name, $description, $price){
        return DB::table('products')->insert([
            'name' => $name,
            'description' => $description,
            'price' => $price
        ]);
    }

    
}
        