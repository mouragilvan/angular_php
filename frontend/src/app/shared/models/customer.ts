import {Address} from "./address";

export interface Customer {
     id: number,
     name: string;
     phone: string;
     cpf: string;
     email: string;
     birthdate: Date;
     address: string;
     address2: string;
     number: string;
     city: string;
     district: string;
     public_area: string;
     zip_code: string;     
}