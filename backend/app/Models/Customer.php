<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'cpf',
        'email',
        'birthdate',
        'address',
        'address2',
        'city',
        'district',
        'public_area',
        'zip_code'
    ];
}
