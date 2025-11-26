<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Exception;
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
        try {
            //Validar si el comentario existe
            $comment = Comment::findOrFail();

            $request->validate([
                'content' => 'required|string'
            ]);

            $comment->update([
                'content' => $request->content
            ]);

            return response()->json([
                'message' => 'Comment updated successfully',
                'data' => $comment,
                'status' => 200
            ], 200);
        } catch (\Exception $error) {
            return response()->json([
                'error' => $error->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        //
        try {
            $comment = Comment::findOrFail($id);

            $comment->delete();

            return response()->json([
                'message' => 'Comment Deleted Successfully',
                'status' => 200
            ], 200);
        } catch (Exception $error) {
            return response()->json([
                'error' => $error->getMessage()
            ]);
        }
    }

    public function restore(string $id)
    {
        try {
            //Buscar el comment por su id
            $comment = Comment::withTrashed()->findOrFail($id);

            $comment->restore();

            return response()->json([
                'message' => 'Comment Restored Successfully',
                'data' => $comment,
                'status' => 200
            ], 200);
        } catch (\Exception $error) {
            return response()->json([
                'error' => $error->getMessage()
            ]);
        }
    }
}
