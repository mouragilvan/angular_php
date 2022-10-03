import { Component, OnInit } from '@angular/core';
import { Product } from '@app/shared/models/product';
import { products } from '@app/shared/models/product-mock';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaleService } from '@app/shared/services/sale.service';
import { Sale } from '@app/shared/models/sale';
import { ProductService } from '@app/shared/services/product.service';
import { Customer } from '@app/shared/models/customer';
import { CustomerService } from '@app/shared/services/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  products: Product[];
  customers: Customer[];
  itemSelected: Product[] = [];
  customerSelected: Customer[] = [];
  myform: FormGroup;
  itensList = [];
  total = 0;
  loading: Boolean = false;

  constructor(public productService: ProductService, 
    public customerService: CustomerService, 
    public saleService: SaleService, public router: Router
    ) {

  }

  ngOnInit(): void {
    this.myform = new FormGroup({
      customer: new FormControl('', []),
      name: new FormControl(),
      products: new FormControl([], []),
      total: new FormControl('', [])
    });
   
    this.getProducts();
    this.getCustomers();
  }

  getProducts(){
    this.loading = true;
    this.productService.getProducts()
      .then( (response: Product[])=>{
         this.products = response;
      } )
      .catch(e=>alert(JSON.stringify(e)))
      .finally(()=>{this.loading = false});
  }

  getCustomers()
  {
    this.loading = true;
    this.customerService.getCustomers()
      .then( (response: Customer[])=>{
         this.customers = response;
      } )
      .catch(e=>alert(JSON.stringify(e)))
      .finally(()=>{this.loading = false});
  }

  

  add(item) {   
    for( let p of this.itensList ){
        if(p == item.id){           
            return;
        }
    } 
    this.myform.value.products.push(item);
    this.itensList.push(item);
    this.itensList.map(el => {
      this.total += el.price;
    });
    this.myform.value.total = this.total;
  }

  remove(item) {
    this.myform.value.products = this.itensList.filter(el => {
      if (el.id != item.id) {
        return el;
      }
    });

    this.itensList = this.itensList.filter(el => {
      if (el.id != item.id) {
        return el;
      }
    });

    this.itensList.map(el => {
      this.total -= el.price;
    });

    this.myform.value.total = this.total;

    if (this.itensList.length == 0) {
      this.myform.value.total = 0;
      this.total = 0;
    }


  }

  search() {
    if(this.products.length == 0){
        return;
    }
    let name = this.myform.value.name;
    name = name.trim();
    if (name == "") {
      this.itemSelected = [];
      return;
    }
    let product = this.products.find((p) => {
      if (p.name.indexOf(name) != -1) {
        return p;
      } else {
        null;
      }
    });
    if (product != null) {

      this.itemSelected.push(product);

      //Remover duplicidades
      this.itemSelected = this.itemSelected.reduce((acc, curr) => {
        if (acc.find(item => item.name === curr.name)) return acc;
        return [...acc, curr]
      }, []);

    } else {

      this.itemSelected = [];
    }

  }

  save(){
    this.loading = true;
    let itens = this.myform.value.products.map(el=> el.id);
    let total = this.myform.value.total;
    let data =  {
         customer_id : this.myform.value.customer,
         itens : itens,
         total: total
    }
    this.saleService.save(data).then((response: Sale)=>{
      confirm('Pedido cadastrado com sucesso!');
      this.router.navigate(["/"]);
    }).catch(e=>alert(JSON.stringify(e))).then(()=>this.loading = false);
  }



}
