import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() error:string = '';
  @Input() type:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
