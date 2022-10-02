import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/shared/models/product';
import { products } from '@app/shared/models/product-mock';
import { ApiService } from '@app/shared/services/api.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product: Product;
    myform: FormGroup;
    id: number;

    constructor(private route: ActivatedRoute, private service: ApiService) {

        
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

   async  ngOnInit() {
        this.initForm();
        this.id = this.route.snapshot.paramMap.get('id') != undefined ? parseInt(this.route.snapshot.paramMap.get('id')) : null;
        if (this.id != null) {
            this.product = await this.service.getProduct(this.id);
            this.initForm();
        }
    }
}