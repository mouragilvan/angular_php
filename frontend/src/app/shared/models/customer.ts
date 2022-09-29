import {Address} from "./address";

export interface Customer {
     id: number,
     name: string;
     email: string;
     address: Address;
     phone: string;  
     cpf: string;
     birthDate: Date;        
}