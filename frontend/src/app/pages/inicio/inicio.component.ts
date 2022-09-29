import { Component, OnInit } from '@angular/core';
import { customers } from '@app/shared/models/customer-mock';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public customers = customers;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
