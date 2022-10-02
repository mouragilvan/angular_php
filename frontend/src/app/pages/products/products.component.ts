import { Component, OnInit } from '@angular/core';
import { Product } from '@app/shared/models/product';
import { products } from '@app/shared/models/product-mock';
import { ApiService } from '@app/shared/services/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products : Product[];
  public header = ["CODIGO","NOME","PREÇO"];

  constructor(private service: ApiService) { 
    
  }

  async ngOnInit() {
      this.products = await this.service.getProducts();
  }

}
