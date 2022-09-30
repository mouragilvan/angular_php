import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  url = "http://localhost:8000/public/api";  

  constructor(private http: HttpClient) { }

  get(endpoint){
      return this.http.get<any>(this.url+endpoint);  
  }


}