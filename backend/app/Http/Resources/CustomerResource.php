<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name'=>$this->name,
            'cpf'=>$this->cpf,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'birthdate'=>$this->birthdate,
            'address'=>$this->address,
            'number'=>$this->number,
            'address2'=>$this->address2,
            'city'=>$this->city,
            'district'=>$this->district,
            'public_area'=>$this->public_area,
            'zip_code'=>$this->public_area
        ];
    }
}
