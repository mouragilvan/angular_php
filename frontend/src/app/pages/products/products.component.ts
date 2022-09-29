import { Component, OnInit } from '@angular/core';
import { products } from '@app/shared/models/product-mock';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = products;
  public header = ["CODIGO","NOME","PREÇO"];
  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

}
