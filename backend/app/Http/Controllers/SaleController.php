<?php

namespace App\Http\Controllers;

use App\Http\Resources\SaleResource;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Sale;

class SaleController extends Controller
{
    public function index(Sale $sale)
    {
        if ($sale->id) {
            return $sale;
        }
        return SaleResource::collection(Sale::all());
    }

    public function store(Request $request)
    {
        $products = $request->itens;

        $saleObject = Sale::create($request->all());

        $saleObject->each(function ($sale) use ($products) {
            $sale->itens()->attach(
                $products
            );
        });

        return new SaleResource($saleObject);
    }
}
