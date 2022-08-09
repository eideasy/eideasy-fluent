<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SigningProcess extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'doc_id',
        'available_methods',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'available_methods' => 'array',
    ];
}
