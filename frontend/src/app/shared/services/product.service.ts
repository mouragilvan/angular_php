import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { environment } from 'environments/environment';

@Injectable()
export class ProductService {

    url = environment.url;

    constructor(private http: HttpClient) { }


    getProducts() {
        return new Promise<Product[]>((resolve, reject) => {
            this.http.get<Product[]>(this.url + `/products`).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    getProduct(id) {
        return new Promise<Product>((resolve, reject) => {
            this.http.get<Product>(this.url + `/products/${id}`).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    save(product: Product) {
        return new Promise<Product>((resolve, reject) => {
            if (product.id) {
                this.http.put<Product>(this.url + `/products/${product.id}`, product).subscribe((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            }else{
                this.http.post<Product>(this.url + `/products`, product).subscribe((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            }
        });
    }


}