<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerResource;
use Illuminate\Http\Request;

use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(Customer $customer)
    {
        if ($customer->id) {
            return new CustomerResource($customer);
        }
        return CustomerResource::collection(Customer::all());
    }

    public function store(Request $request)
    {
        return Customer::create($request->all());
    }

    public function update(Customer $customer, Request $request)
    {
        return $customer->update($request->all());
    }

    public function destroy(Customer $customer)
    {
        return $customer->destroy($customer->id);
    }
}
