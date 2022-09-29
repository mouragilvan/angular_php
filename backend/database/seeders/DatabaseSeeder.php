<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Customer;
use App\Models\Product;
use App\Models\Sale;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        Customer::factory(10)->create();        
       
        Product::factory(10)->create();

        Sale::factory(5)->create();
       
        $products = Product::all();
        
        Sale::all()->each(function ($sale) use ($products) {
            $sale->itens()->attach(
                $products->random(rand(1, 10))->pluck('id')->toArray()
            );
        });
    }
}
