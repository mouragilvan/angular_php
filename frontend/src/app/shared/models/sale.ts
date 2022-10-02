import { Customer } from "./customer";
import { Product } from "./product";

export interface Sale{
     id: number;
     dateSale: Date;
     customer: Customer,
     itens: Product[],
     total: number;
}



