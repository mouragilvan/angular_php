import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input("active") loading : Boolean;

  @Output() onSave = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

}
