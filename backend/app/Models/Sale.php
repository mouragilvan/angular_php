<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Sale extends Model
{
    use HasFactory;

    protected $fillable = [
        'datesale',
        'customer_id',
        'total'
    ];

    public function itens()
    {
        return $this->belongsToMany(Product::class);
    }
}
