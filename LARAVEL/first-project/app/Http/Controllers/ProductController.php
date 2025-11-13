<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Query Builder
        //$products = Product::getAllProducts();
        // Eloquent 
        // Codigo del metodo con Eloquent
        $products = Product::all();

        return response()->json([
            'data' => $products,
            'message' => 'Products retrieved successfully',
            'status' => 200
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /* sintaxis vieja 
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        
        $product->save();
        */
        
        //uso de query builder
        //Product::saveProduct($request->name, $request->description, $request->price);
        
        // Para guardar datos con Eloquent - creando metodo para guardar un nuevo registro en la tabla products
        //Eloquent -> create metodo estatico para crear un nuevo registro en la tabla products
        $product = Product::create($request->all());

        return response()->json([
            'data' => $product,
            'message' => 'Product created successfully',
            'status' => 201
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,string $id)
    {
        //Manejo de errores
        try{
            //Buscamos el producto por su id
            $product = Product::findOrFail($id);

            //Actualizamos el producto en cuestion
            $product->update($request->all());

            return response()->json([
                'data' => $product,
                'message' => 'Product updated successfully',
                'status' => 200
            ],200
        );

        }catch(\Exception $e){
            return response()->json([
                'message' => 'Error updating product',
                'error' => $e->getMessage(),
                'status' => 500
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        //
        try{
            //Buscamos el producto por su id
            $product = Product::findOrFail($id);

            //Eliminamos el producto en cuestion
            $product->delete();

            return response()->json([
                'message' => 'Product deleted successfully',
                'status' => 200
            ],200);
            
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Product deleted successfully',
                'error' => $e->getMessage(),
                'status' => 500
            ],500);
        }     
    }
}