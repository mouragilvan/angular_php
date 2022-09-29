import { Customer } from "./customer";
import { Address } from "./address";

const address1: Address = {
    address: "Rua das amores 123",
    number: "12A",
    district: "Ceilandia"
};

const address2: Address =  {
    address: "Rua das amores asdasdad",
    number: "12A",
    district: "Ceilandia Sul"
};

export const customers : Customer[]= [{
    id: 1,
    name: "Fulano de tal",
    email: "ful@gmail.com",
    address: address1,
    phone: "61 88552255",
    cpf: '220022100',
    birthDate: new Date()
    
},
{
    id: 2,
    name: "Fulano de tal 2",
    email: "ful2@gmail.com",
    address: address2,
    phone: "61 88995511" ,
    cpf: '22002210000',
    birthDate: new Date()   
}
]