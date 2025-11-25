<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Traer el comentario con su usuario y post asociado
        //Con Eloquent trayendo todos los datos
        //$comments = Comment::with(['user','post'])->get();

        //con eloquent pero trayendo solo el comentario, el nombre del usuario y el titulo del post
        $comments = Comment::with(['user:id,name', 'post:id,title'])->get();

        //Traer los comentarios con Query builder
        //$commentsQB = Comment::getCommentsWithUsersAndPostsQueryBuilder();

        return response()->json([
            'message' => 'Comments retrieved successfully',
            'data' => $comments,
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
        //
        try {
            $request->validate([
                'content' => 'required|string',
                'post_id' => 'required|integer|exists:posts,id'
            ]);

            // Create con los modelos relacionados
            //$comment = $request->user()->comments()->create($request->all());

            $comment = Comment::create([
                'content' => $request->content,
                'post_id' => $request->post_id,
                'user_id' => $request->user()->id
            ]);

            return response()->json([
                'message' => 'Comment created successfully',
                'data' => $comment,
                'status' => 201
            ], 201);
        } catch (\Exception $error) {
            return response()->json([
                'error' => $error->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
