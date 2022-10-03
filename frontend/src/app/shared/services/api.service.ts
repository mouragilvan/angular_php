import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { environment } from 'environments/environment';
@Injectable()
export class ApiService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  get(endpoint) {
    return this.http.get<any>(this.url + endpoint);
  }

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

  getProducts(){
    return new Promise<Product[]>((resolve, reject) => {
      this.http.get<Product[]>(this.url + `/products`).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  getProduct(id){
    return new Promise<Product>((resolve, reject) => {
      this.http.get<Product>(this.url + `/products/${id}`).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }


}