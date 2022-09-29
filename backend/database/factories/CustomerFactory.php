<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $cpf = implode($this->faker->randomElements(['1', '2', '3', '4', '5','6','7','8','9','0','9'], 11));
        $zipCode = implode($this->faker->randomElements(['1', '2', '3', '4', '5','6','7','8','9','0'], 8));
        
        return [
            'name'=>$this->faker->name(),
            'cpf'=>$cpf,
            'email'=>$this->faker->email(),
            'birthdate'=>$this->faker->date('Y-m-d'),
            'address'=>$this->faker->address(),
            'address2'=>$this->faker->address(),
            'city'=>$this->faker->city(),
            'district'=>$this->faker->name(),
            'public_area'=>$this->faker->name(),
            'zip_code'=>$zipCode,
        ];
    }
}
