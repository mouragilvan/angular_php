import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/shared/models/product';
import { products } from '@app/shared/models/product-mock';
import { ApiService } from '@app/shared/services/api.service';
import { ProductService } from '@app/shared/services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product: Product;
    myform: FormGroup;
    id: number;
    loading: Boolean = false;

    constructor(private route: ActivatedRoute, private service: ProductService) {        
    }

    initForm(){
        this.myform = new FormGroup({
            name: new FormControl(this.product?.name, [
                Validators.required
            ]),
            price: new FormControl(this.product?.price, [
                Validators.required
            ])
        });
    }

     ngOnInit(): void {
        this.initForm();
        this.loading = true;
        this.id = this.route.snapshot.paramMap.get('id') != undefined ? parseInt(this.route.snapshot.paramMap.get('id')) : null;
        if (this.id != null) {
         this.service.getProduct(this.id).then((response: Product)=>{
            this.product = response;
            this.initForm();
         }).catch(e=>alert(JSON.stringify(e))).finally( ()=>this.loading = false );            
        }
    }

    save(){
        this.loading = true;
        if(this.id){       
          this.myform.value.id = this.id;  
        }
        this.service.save(this.myform.value).then((response: Product)=>{
          this.product = response;      
          confirm("SUCESSO");       
        }).catch( e=> alert(JSON.stringify(e))).finally( ()=>{
          this.loading = false;
        });    
      }
}