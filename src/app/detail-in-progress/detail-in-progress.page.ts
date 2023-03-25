import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-in-progress',
  templateUrl: './detail-in-progress.page.html',
  styleUrls: ['./detail-in-progress.page.scss'],
})
export class DetailInProgressPage implements OnInit {
  data: any = ['', '', '', '', '',]
  constructor() { }

  ngOnInit() {
  }

}
