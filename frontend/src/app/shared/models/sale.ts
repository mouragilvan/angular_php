import { Customer } from "./customer";
import { Product } from "./product";

export interface Sale{
     id: number;     
     customer: Customer,
     itens: Product[],
     total: number;
     dateSale: Date;
}



