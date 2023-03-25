import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-trouble',
  templateUrl: './detail-trouble.page.html',
  styleUrls: ['./detail-trouble.page.scss'],
})
export class DetailTroublePage implements OnInit {
  data = new Array(10);
  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  goToDetail(){
    this.navCtrl.navigateForward('pickup-detail',{queryParams: {data: 'Trouble'}})
  }

}
