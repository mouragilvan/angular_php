import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { environment } from 'environments/environment';

@Injectable()
export class CustomerService {

    url = environment.url;

    constructor(private http: HttpClient) { }


    getCustomers() {
        return new Promise<Customer[]>((resolve, reject) => {
            this.http.get<Customer[]>(this.url + `/customers`).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    getCustomer(id) {
        return new Promise<Customer>((resolve, reject) => {
            this.http.get<Customer>(this.url + `/customers/${id}`).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    save(customer: Customer) {
        return new Promise<Customer>((resolve, reject) => {
            if (customer.id) {
                this.http.put<Customer>(this.url + `/customers/${customer.id}`, customer).subscribe((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            }else{
                this.http.post<Customer>(this.url + `/customers`, customer).subscribe((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            }
        });
    }


}