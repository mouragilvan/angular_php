import { Component, OnInit } from '@angular/core';
import { customers } from '@app/shared/models/customer-mock';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers = customers;
  constructor() {     
  }

  ngOnInit(): void {
  }

}
