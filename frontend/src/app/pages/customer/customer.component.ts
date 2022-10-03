import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '@app/shared/models/customer';
import { CustomerService } from '@app/shared/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public customer: Customer;
  myform: FormGroup;
  public id: number;
  public loading: Boolean = false;

  constructor(private route: ActivatedRoute, private service: CustomerService) {
  }

  async ngOnInit() {
    this.initForm();
    this.id = this.route.snapshot.paramMap.get('id') != undefined ? parseInt(this.route.snapshot.paramMap.get('id')) : null;
    if (this.id != null) {     
      this.loading = true; 
      this.service.getCustomer(this.id).then((customer: Customer)=>{
        this.customer = customer;
        this.loading = false;
        this.initForm();
      }).catch(e=>console.log(e));
            
      
    }    
  }

  async initForm() {
    const formatter = new Intl.DateTimeFormat("pt-BR");
    //const date = this.customer?.birthdate != undefined ? formatter.format(this.customer?.birthdate) : '';
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
      birthdate: new FormControl(this.customer?.birthdate, [
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
      address2: new FormControl(this.customer?.address2, [
        Validators.required
      ]),
      public_area: new FormControl(this.customer?.public_area, [
        Validators.required
      ]),
      district: new FormControl(this.customer?.district, [
        Validators.required
      ]),
      number: new FormControl(this.customer?.number, [
        Validators.required
      ]),
      city: new FormControl(this.customer?.city, [
        Validators.required
      ]),
      zip_code: new FormControl(this.customer?.zip_code, [
        Validators.required
      ])
    });
  }

   save(){
    this.loading = true;
    if(this.id){       
      this.myform.value.id = this.id;  
    }
    this.service.save(this.myform.value).then((response: Customer)=>{
      this.customer = response;      
      confirm("SUCESSO");       
    }).catch( e=> alert(JSON.stringify(e))).finally( ()=>{
      this.loading = false;
    });    
  }

}
