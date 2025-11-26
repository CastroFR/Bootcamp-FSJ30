<?php

namespace App\Models;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Comment extends Model
{
    use SoftDeletes;
    //
    protected $fillable = [
        'content',
        'post_id',
        'user_id'
    ];

    // Declaraciones para que elocuent entienda las relaciones
    // Cada comentario pertenece a un post
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    // Cada comentario pertenece a un usuario
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //Este metodo esta en el modelo y no en el controller de Comment, por que el modelo está interactuando con la BD, es decir se encarga de interactuar con la BD, 
    //por qur el controlador solo termina ejecutando las consultas pero no tiene por que saber la logica detras de esto.
    public function getCommentsWithUsersAndPostsQueryBuilder()
    {
        return DB::table('comments')
            ->join('users', 'comments.user_id', '=', 'users.id')
            ->join('posts', 'comments.post_id', '=', 'posts.id')
            ->select('comments.*', 'users.name as author', 'posts.title as post_title')
            ->get();
    }
}
