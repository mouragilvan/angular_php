import { Component, OnInit } from '@angular/core';
import { Product } from '@app/shared/models/product';
import { products } from '@app/shared/models/product-mock';
import { ApiService } from '@app/shared/services/api.service';
import { ProductService } from '@app/shared/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products : Product[];
  public header = ["CODIGO","NOME","PREÇO"];
  public loading: Boolean = false;

  constructor(private service: ProductService) { 
    
  }

  ngOnInit() {
      this.loading = true;
      this.service.getProducts().then((response: Product[])=>{
        this.products = response;
      })
      .catch(e=>alert(JSON.stringify(e)))
      .finally(()=>this.loading = false);
  }

}
