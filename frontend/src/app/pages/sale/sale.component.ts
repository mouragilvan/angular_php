import { Component, OnInit } from '@angular/core';
import { Product } from '@app/shared/models/product';
import { products } from '@app/shared/models/product-mock';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  products = products;
  itemSelected: Product[] = [];
  myform: FormGroup;
  itensList = [];
  total = 0;


  constructor() {

  }

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormControl('', []),
      products: new FormControl([], []),
      total: new FormControl('', [])
    });
  }

  

  add(item) {   
    for( let p of this.itensList ){
        if(p.id == item.id){           
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



}
