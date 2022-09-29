import { Customer } from "./customer";
import { Product } from "./product";

import { customers } from "./customer-mock";
import { products } from "./product-mock";

export interface Sale{
     id: number;
     dateSale: Date;
     customer: Customer,
     itens: Product[],
     total: number;
}

export const sales : Sale[] = [
    {
        id: 123,
        customer: customers[0],
        dateSale: new Date,
        itens: products,
        total: totalPrice(products)
    },
    {
        id: 123,
        customer: customers[1],
        dateSale: new Date,
        itens: products,
        total: totalPrice(products)
    }
];

export function totalPrice(products: Product[]){
       let total: number = 0;
       for(let p of products){       
            total +=p.price;
       } 
       
       return total;
}

