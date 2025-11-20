<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Exception;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
        // Query Builder

        // Elocuent
        $posts = Post::with(['user'])->get();

        return response()->json([
            'data' => $posts,
            'status' => 200
        ],200);

        }catch(Exception $error){
            return response()->json([
                'error' => $error->getMessage()
            ]);
        }
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
        //
        try{
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string'
        ]);

        // Create con eloquent y sin los modelos relacionados
        //$post = Post::create($request->all());
        //crate los modelos relacionados
        $post = $request->user()->posts()->create($request->all());

        return response()->json([
            'message' => 'Post Created Successfully',
            'data' => $post,
            'status' => 201
        ],201);

        }catch(Exception $error){
            return response()->json([
                'error' => $error->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
