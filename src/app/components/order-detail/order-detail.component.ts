import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent  implements OnInit {
  @Input() isIconSection:boolean = false;
  @Input() status: string = '';
  constructor() { }

  ngOnInit() {}

}
