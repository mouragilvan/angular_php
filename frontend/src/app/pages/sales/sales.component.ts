import { Component, OnInit } from '@angular/core';
import { Sale } from '@app/shared/models/sale';
import { ApiService } from '@app/shared/services/api.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public sales: Sale[];

  public sale: Sale;

  public loading : Boolean = false;

  constructor(public service: ApiService) {

  }

  setSale(sale: Sale) {
    this.sale = sale;
  }

  ngOnInit(): void {
    this.loading = true;
    this.service.get("/sales").subscribe((response) => {
      this.sales = response;
    }, (e) => { console.log(e) },()=>{ this.loading = false});
  }

}
