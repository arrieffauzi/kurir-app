import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-in-progress',
  templateUrl: './detail-in-progress.page.html',
  styleUrls: ['./detail-in-progress.page.scss'],
})
export class DetailInProgressPage implements OnInit {
  data = new Array(10);
  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  goToDetail(){
    this.navCtrl.navigateForward('pickup-detail',{queryParams: {data: 'Inprogress'}})
  }

}
