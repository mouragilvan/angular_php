<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name','price'];

    protected $hidden = ['created_at','updated_at'];

    public function scopeLimit($query,$limit)
    {
        return $query->offset(1)->limit($limit);
    }
}
