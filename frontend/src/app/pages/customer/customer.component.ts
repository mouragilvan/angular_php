import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '@app/shared/models/customer';
import { customers } from '@app/shared/models/customer-mock';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public customer: Customer;
  myform: FormGroup;
  public id: number;

  constructor(private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id') != undefined ? parseInt(this.route.snapshot.paramMap.get('id')) : null;
    if (this.id != null) {
      this.customer = customers.find(el => el.id == this.id);
    }
  }



  ngOnInit(): void {

    const formatter = new Intl.DateTimeFormat("pt-BR");
    const date = this.customer?.birthdate != undefined ? formatter.format(this.customer?.birthdate) : '';

    this.myform = new FormGroup({
      // name: new FormGroup({
      //     firstName: new FormControl('', Validators.required), 
      //     lastName: new FormControl('', Validators.required),
      // }),
      name: new FormControl(this.customer?.name, [
        Validators.required
      ]),
      cpf: new FormControl(this.customer?.cpf, [
        Validators.required
      ]),
      birthDate: new FormControl(date, [
        Validators.required
      ]),
      phone: new FormControl(this.customer?.phone, [
        Validators.required
      ]),
      email: new FormControl(this.customer?.email, [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      address: new FormControl(this.customer?.address, [
        Validators.required
      ]),
      district: new FormControl(this.customer?.district, [
        Validators.required
      ]),
      number: new FormControl(this.customer?.number, [
        Validators.required
      ])
    });


  }

}
