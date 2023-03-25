import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-success',
  templateUrl: './detail-success.page.html',
  styleUrls: ['./detail-success.page.scss'],
})
export class DetailSuccessPage implements OnInit {
  data = new Array(10);
  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  goToDetail(){
    this.navCtrl.navigateForward('pickup-detail',{queryParams: {data: 'Success'}})
  }

}
