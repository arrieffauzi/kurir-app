import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pickup-detail',
  templateUrl: './pickup-detail.page.html',
  styleUrls: ['./pickup-detail.page.scss'],
})
export class PickupDetailPage implements OnInit {
  status:string = '';
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe((params:any) => {
      this.status = params.data;
      console.log('data', this.status);
    });
  }
}
