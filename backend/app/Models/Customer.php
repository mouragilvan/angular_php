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
        'phone',
        'email',
        'birthdate',
        'address',
        'number',
        'address2',
        'city',
        'district',
        'public_area',
        'zip_code'
    ];
}
