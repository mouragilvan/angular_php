<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;
class ProductController extends Controller
{
    public function index(Product $product, Request $request){
          if($product->id){
              return new ProductResource($product);
          }
          //Uma das formas nativas de se trazer um retorno com um limite de itens
          //return array_slice(Product::all()->toArray(), 0, $request->limit);     
          return ProductResource::collection(Product::all());    
    }

    public function store(Request $request)
    {        
        return Product::create($request->all()); 
    }

    public function update(Product $product, Request $request)
    {
        return $product->update($request->all());
    }

    public function destroy(Product $product)
    {
        return $product->destroy($product->id);
    }


}
