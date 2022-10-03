import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sale';
import { environment } from 'environments/environment';

@Injectable()
export class SaleService {

    url = environment.url;

    constructor(private http: HttpClient) { }


    getSales() {
        return new Promise<Sale[]>((resolve, reject) => {
            this.http.get<Sale[]>(this.url + `/sales`).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    getSale(id) {
        return new Promise<Sale>((resolve, reject) => {
            this.http.get<Sale>(this.url + `/sales/${id}`).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    save(sale) {
        return new Promise<Sale>((resolve, reject) => {
            this.http.post<Sale>(this.url + `/sales`, sale).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }


}