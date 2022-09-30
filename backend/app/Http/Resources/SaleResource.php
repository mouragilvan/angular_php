<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SaleResource extends JsonResource
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
            'id'=>$this->id,
            'customer'=>new CustomerResource($this->customer),
            'total'=>$this->total,
            'dateSale'=>$this->created_at,    
            'itens'=> ProductResource::collection($this->itens)        
        ];
    }
}
