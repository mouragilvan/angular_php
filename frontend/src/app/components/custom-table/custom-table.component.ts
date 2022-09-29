import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {


  @Input("data") data : Array<any>;
  @Input("header") header: Array<any>;
  @Input("prefix") prefixUrl: string;

  constructor() { }

  ngOnInit(): void {
   
  }

}
