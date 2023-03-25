import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-pending',
  templateUrl: './detail-pending.page.html',
  styleUrls: ['./detail-pending.page.scss'],
})
export class DetailPendingPage implements OnInit {
  data = new Array(10);
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToDetail(){
    this.navCtrl.navigateForward('pickup-detail',{queryParams: {data: 'Pending'}})
  }

}
