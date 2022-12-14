import { Component, OnInit } from '@angular/core';
import {Customer} from '@app/shared/models/customer';
import { ApiService } from '@app/shared/services/api.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers : Customer[];
  public loading : Boolean = false;

  constructor(public service: ApiService) {     
  }

 async  ngOnInit() {
     this.loading = true;
     this.customers = await this.service.getCustomers();
     this.loading = false;
  }

}
