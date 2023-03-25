import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.scss'],
})
export class StatusComponentComponent  implements OnInit {
  segment: string = "list";
  arr = new Array(10);
  segmentValue: string = 'pending'
  constructor() { }

  ngOnInit() {
    this.segment = this.segmentValue;
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
